
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CartButton.css';

const CartButton = ({session}) => {

    const [cartCount, setCartCount] = useState(0);

    const sessionCart = session.cart

    useEffect(()=>{
        try {
            setCartCount(Object.values(sessionCart).length);
        } catch {
            
        }
    }, [sessionCart])


    return(
        <Link to="/cart" id="cart-button-container">
            <button id="cart-button" className="white">
                <i id="cart" className="fa-solid fa-cart-shopping"></i>
            </button>
            <span id="cart-count">{cartCount}</span>
        </Link>
    )
}

export default CartButton;