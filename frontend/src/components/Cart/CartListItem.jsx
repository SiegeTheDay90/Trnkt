import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './CartListItem.css'
import { sendCartItem, deleteCartItem } from "../../store/session";

const CartListItem = ({product, count}) => {
    const dispatch = useDispatch();
    const id = product.id;
    const [quantity, setQuantity] = useState(product.quantity);

    const quantitySelect = (e) => {
        setQuantity(e.target.value);
        dispatch(sendCartItem(id, e.target.value));
        debugger;
    }

    const handleRemove = (e) => {
        dispatch(deleteCartItem(id))
    }

    return (

            <div className="cart-item">
            <Link to={`/products/${id}`}>
                <img src={product.photoUrl} alt={product.name}/>
                <div className="cart-item-details">
                    <div className="cart-item-title">{product.name}</div>
                    <div className="cart-item-options">Option 1</div>
                </div>
            </Link>
                <div className="cart-item-right">
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
                        <option value="9">5</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                    <button className="cart-item-remove-button" onClick={handleRemove}>Remove</button>

                    </form>
                    <span className="cart-item-price">${product.price.toFixed(2)}</span>
                </div>
            </div>

    )
}

export default CartListItem;