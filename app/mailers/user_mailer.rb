class UserMailer < ApplicationMailer

    def welcome_email
        @user = params[:user]
        @url = 'https://trnkt-2022.herokuapp.com/'
        mail(to: @user.email, subject: 'Welcome to Trnkt!')
    end

    def reset_request
        @user = params[:user]
        @url = 'https://trnkt-2022.herokuapp.com/confirmreset'
        @confirmation = Confirmation.new(user_id: @user.id)
        if @confirmation.save
            mail(to:@user.email, subject: 'Reset Password')
        end
    end

end
