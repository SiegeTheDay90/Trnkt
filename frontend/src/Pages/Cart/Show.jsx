import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartList from './CartList';
import Checkout from './Checkout';

const Cart = () => {
    

    const sessionUser = useSelector(state => state.session.user);
    const sessionCart = useSelector(state => state.session.cart);

    const cartLength = () => {
        try {
            const length = `${Object.values(sessionCart).length}`;
            if(length===0) return "No";
            return length;
        } catch {
            return "No";
        }
    }


    return (
        <>
        <div id='cart-outer-container'>
            <div id='cart-header'>
                <div id='cart-header-left'>
                    <h1>{cartLength()} items in your cart</h1>
                </div>
                <div id='cart-header-right'>
                    <Link to="/"><button className="button-white" id="keep-shopping-button">Keep Shopping</button></Link>
                </div>
            </div>

            {(sessionUser && sessionCart) &&
                <div id='cart-body'>
                    <div id='cart-body-left'>
                        <CartList cart={sessionCart} />
                    </div>
                    <div id='cart-body-right'>
                        <Checkout cart={sessionCart} />
                    </div>
                </div>
            }
            
        </div>
        </>
    )
}

export default Cart;