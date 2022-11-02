import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductMenu.css'
import { useParams, useHistory } from "react-router-dom";
import { useState } from 'react';
import { sendCartItem } from '../../store/session';

const ProductMenu = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [quantity, setQuantity] = useState(1);


    const product = useSelector(state => state.products[id]);
    const shops = useSelector(state => state.shops);
    let shop = {name: "Name"}
    if (product && shops){
        shop = shops[product.shopId]
    }

    const addToCart = (e) => {
        e.preventDefault();
        document.getElementById('product-atc-modal-container').showModal();
        dispatch(sendCartItem(product.id, quantity));
    }

    const closeModal = (e) => {
        document.getElementById('product-atc-modal-container').close();
    }

    const goToCart = (e) => {
        e.preventDefault();
        history.push('/cart');
    }

    return (
        <>
        {product &&
        <div id="product-menu-shop-details">
            <span><Link to=   {`/shops/${product.shopId}`} id="shop-title">{shop.name}</Link> 
            <button id="follow-button"><i className="fa-regular fa-heart"></i> Follow</button></span>
            <div><span id="sales">{shop.sales} sales |&nbsp;</span>
            <span id="rating">Rating: {shop.rating}</span></div>
        </div>}
        <div id="product-details">
            <h1>{product.name}</h1>
            <h2>${product.price.toFixed(2)}</h2>

            <label htmlFor="quantity-select"><span>Quantity <span className="mandatory"> * </span></span>
                <select id="quantity-select" className="menu-select" onChange={(e) => setQuantity(e.target.value)}>
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
            </label><br/>
            <button id="button-add-to-cart" className="button-black" onClick={addToCart}>Add to Cart</button><br/>
            <p id="product-description"><span style={{"fontWeight":"bold"}}>Description:</span> {product.description}</p>
        </div>

        <dialog id="product-atc-modal-container">
            <div id="product-atc-modal">
                <h1>Added to Cart!</h1>
                <button className="button-black" onClick={goToCart}>Go to Cart</button>
                <button className="button-white" onClick={closeModal}>Keep Shopping</button>
            </div>
        </dialog>
        </>
    )
}

export default ProductMenu;