import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/PurchaseMenu.css'
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { sendCartItem } from '../../store/session';
import { likeProduct } from '../../store/products';

const PurchaseMenu = ({product}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [quantity, setQuantity] = useState(1);
    const shops = useSelector(state => state.shops);
    const [liked, setLiked] = useState(product?.liked);
    const currentUser = useSelector(state => state.session.user)

    if(product.liked === "true"){
        setLiked(true)
    }
    
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



    const showLoginModal = (e) => {
        const modal = document.getElementById('OverlayContainer');
        modal.showModal();
        document.getElementById('App').style.overflow = "hidden";
    }

    const followClick = (e) => {
        if(currentUser){
            dispatch(likeProduct(product.id));
            setLiked(!liked);
        } else {
            showLoginModal();
        }
    }

    const heart = () => {
        if(!product.liked){
            return "fa-regular fa-heart"
        } else{
            return "fa-solid fa-heart"
        }
    }

    return ( product && shop ?
        <>
        <div id="product-menu-shop-details">
            <span><Link to=   {`/shops/${product.shopId}`} id="shop-title">{shop.name}</Link> 
            <button id="follow-button" onClick={followClick}><i className={heart()} ></i> &nbsp;{product.liked ? 'Following' : 'Follow'}</button></span>
            <div><span id="sales">{shop.sales} sales |&nbsp;</span>
            <span id="rating">Rating: {shop.rating}</span></div>
        </div>
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
            <button id="button-add-to-cart" className="black" onClick={addToCart}>Add to Cart</button><br/>
            <p id="product-description"><span style={{"fontWeight":"bold"}}>Description:</span> {product.description}</p>
        </div>

        <dialog id="product-atc-modal-container">
            <div id="product-atc-modal">
                <h1>Added to Cart!</h1>
                <button className="black" onClick={goToCart}>Go to Cart</button>
                <button className="white" onClick={closeModal}>Keep Shopping</button>
            </div>
        </dialog>
        </>
        : <h1>Loading...</h1>
    )
}

export default PurchaseMenu;