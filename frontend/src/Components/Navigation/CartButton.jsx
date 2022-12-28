
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/CartButton.css';

const CartButton = ({session}) => {

    const [cartCount, setCartCount] = useState(0);

    const sessionCart = session.cart

    useEffect(()=>{
        try {
            setCartCount(Object.values(sessionCart).length);
        } catch {
            setCartCount(0)
        }
    }, [sessionCart])

    const hidden = () => {
        return cartCount > 0 ? "" : "hidden"
    }


    return(
        <Link tabindex="-1" to="/cart" id="cart-button-container">
            <button id="cart-button" className="white">
                <i id="cart" className="fa-solid fa-cart-shopping"></i>
            </button>
            <span id="cart-count" className={hidden()}>{cartCount}</span>
        </Link>
    )
}

export default CartButton;