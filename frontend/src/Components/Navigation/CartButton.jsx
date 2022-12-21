
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
        <Link to="/cart">
            <button id="cart-button" className="white">
                <i id="cart" className="fa-solid fa-cart-shopping"></i>
            </button>
            {cartCount}
        </Link>
    )
}

export default CartButton;