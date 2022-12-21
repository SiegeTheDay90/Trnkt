import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './styles/CartItem.css'
import { sendCartItem, deleteCartItem } from "../../store/session";

const CartListItem = ({product, count}) => {
    const dispatch = useDispatch();
    const id = product.id;
    const [quantity, setQuantity] = useState(product.quantity);

    const quantitySelect = (e) => {
        setQuantity(e.target.value);
        dispatch(sendCartItem(id, e.target.value));
    }

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(deleteCartItem(id))
    }

    return (

            <li className="cart-item foreground-container">
            <img src={product.photoUrl} alt={product.name}/>
                <div className="cart-item-details">
                    <Link to={`/products/${id}`}><div className="cart-item-title">{product.name}</div></Link>
                    <div className="cart-item-options"></div>
                </div>
            
                <div className="cart-item-right">
                    <button className="white cart-item-remove-button" onClick={handleRemove}>Remove</button>
                    <form>
                    <select className="menu-select" value={quantity} onChange={quantitySelect}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    </form>
                    <span className="cart-item-price">${product.price.toFixed(2)}</span>
                </div>
            </li>

    )
}

export default CartListItem;