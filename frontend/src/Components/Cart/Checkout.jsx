import { useDispatch } from 'react-redux';
import './styles/Checkout.css'
import { useEffect, useState } from 'react';
import { clearCart } from '../../store/session';


const Checkout = ({cart}) => {

    const dispatch = useDispatch();
    
    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0.05);
    const products = Object.values(cart);

    const calculateTotal = () => {
        let sum = 0;

        products.forEach((product) => {
            sum += (product.price * product.quantity);
        })

        setSubTotal(sum.toFixed(2));
    }
    useEffect(calculateTotal, [cart])

    const checkOutClick = () => {
        dispatch(clearCart());
    }

    return (
        <>
        
        <div id="cart-checkout-container">
            <div className="cart-checkout-row">
                <span>Item(s) total:</span> <span>${subTotal}</span>
            </div>
            <div className="cart-checkout-row">
            <span>Discount:</span> <span>${(subTotal*discount).toFixed(2)}</span>
            </div>
            <hr/>
            <div className="cart-checkout-row">
            <span>Subtotal:</span> <span>${(subTotal*(1-discount)).toFixed(2)}</span>
            </div>
            <div className="cart-checkout-row">
            <span>Shipping:</span> <span>$5.00</span>
            </div>
            <hr/>
            <div className="cart-checkout-row">
            <span>Total:</span> <span>${(subTotal*(1-discount)).toFixed(2) - -5.00}</span>
            </div>
            <button className="black" id="checkout-button" onClick={checkOutClick}>Checkout</button>
        </div>
        </>
    )
}

export default Checkout;