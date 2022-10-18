class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection
    protect_from_forgery with: :exception
    rescue_from StandardError, with: :unhandled_error
    rescue_from ActionController::InvalidAuthenticityToken, with: :handle_csrf_exception

    before_action :snake_case_params, :attach_authenticity_token

    def current_user
        @current_user ||= User.find_by(session_token: session['_trnkt_session'])
    end
      
    def login!(user)
        session['_trnkt_session'] = user.reset_session_token!
    end
    
    def logout!
        session['_trnkt_session'] = nil
        current_user.reset_session_token!
        @current_user = nil
    end
    
    def require_logged_in
        render json: { message: 'Unauthorized' }, status: :unauthorized unless current_user
    end

    def require_logged_out
        render json: { message: 'Unauthorized' }, status: :unauthorized unless current_user
    end

    private

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end

    def handle_csrf_exception
        render json: {errors: ["Invalid Authenticity Token"]}, status: 422
    end

    def unhandled_error(error)
        if request.accepts.first.html?
            raise error
        else
            @message = "#{error.class} - #{error.message}"
            @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
            render 'api/errors/internal_server_error', status: :internal_server_error
            
            logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
        end
    end

    def user_params
        params.require(:user).permit(:first_name, :password, :email)
    end

    def session_params
        params.require(:session).permit(:credential, :password, :cart)
    end
end
