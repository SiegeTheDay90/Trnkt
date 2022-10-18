import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'
import { useEffect } from "react";
import CartList from './CartList';

const Cart = () => {
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(fetchShop(id))
    // }, [id, dispatch]);

    const sessionUser = useSelector(state => state.session.user);
    const sessionCart = useSelector(state => state.session.cart);
    
    if(!sessionUser || !sessionCart) return null;
    return (
        <>
        <div id='cart-outer-container'>
            <div id='cart-header'>
                <div id='cart-header-left'>
                    <h1>{`${Object.values(sessionCart).length}`} items in your cart</h1>
                </div>
                <div id='cart-header-right'>
                    Keep Shopping
                </div>
            </div>

            <div id='cart-body'>
                <div id='cart-body-left'>
                    <CartList cart={sessionCart} />
                </div>
                <div id='cart-body-right'>
                    {/* <CartCheckoutMenu /> */}
                    CartCheckoutMenu
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart;