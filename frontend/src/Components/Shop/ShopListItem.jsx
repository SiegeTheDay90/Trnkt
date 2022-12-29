import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { likeProduct } from "../../store/products";
import './styles/ShopListItem.css';

const ShopListItem = ({product}) => {

    const [liked, setLiked] = useState(false);

    const dispatch = useDispatch();
    const heart = () => {
        if(!product.liked){
            return "fa-regular fa-heart"
        } else{
            return "fa-solid fa-heart"
        }
    }

    const followClick = (e) => {
        dispatch(likeProduct(product.id));
        setLiked(!liked);
        product.liked = !product.liked
    }

    return (

        <div className="item">

            <button className="white follow-button" onClick={followClick}><i className={heart()}></i></button>
            {/* <button>heart</button> */}
            <Link to={`/products/${product.id}`}>
                <img src={product.photoUrl} alt={product.name}/>
                <span className="item-title">{product.name}</span>
                <span className="item-price">${product.price.toFixed(2)}</span>
            </Link>
        </div>
    )
}

export default ShopListItem;