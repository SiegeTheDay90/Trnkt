import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { likeProduct } from '../../store/products';
import './styles/ProductCard.css'

const ProductCard = ({ product }) => {
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
        e.stopPropagation();
        dispatch(likeProduct(product.id));
        const value = liked ? false : true;
        setLiked(value);
    }

    return (
        <>
        {
            product 
                ? <div className="product-card" >
                    <Link to={`/products/${product.id}`}>
                    <div className="product-image-container">
                        <button className="white follow-button" onClick={followClick}><i className={heart()} ></i></button>
                        <img className="product-image card-image" src={product.photoUrl} alt={product.name}/>
                        <span className="item-detail price">${product.price.toFixed(2)}</span>
                    </div>
                        <div className="item-detail name">{product.name}</div>

                    </Link> 
                </div>

            : <h1>Loading...</h1>
        }
        </>
    )
}

export default ProductCard;