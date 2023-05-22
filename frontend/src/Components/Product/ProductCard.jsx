import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { likeProduct } from '../../store/products';
import './styles/ProductCard.css'

const ProductCard = ({ product }) => {
    const [liked, setLiked] = useState(product?.liked);
    const currentUser = useSelector(state => state.session.user)

    const dispatch = useDispatch();

    const heart = () => {
        if(liked){
            return "fa-solid fa-heart"
        } else{
            return "fa-regular fa-heart"
        }
    }

    const showLoginModal = (e) => {
        const modal = document.getElementById('OverlayContainer');
        modal.showModal();
        document.getElementById('App').style.overflow = "hidden";
    }

    const followClick = (e) => {
        if(currentUser){
            dispatch(likeProduct(product.id)).then(()=>{
                setLiked(prev => !prev);
            });
        } else {
            showLoginModal();
        }
    }

    return (
        <>
        {
            product 
                ? <div className="product-card" >
                    <button className="white follow-button" onClick={followClick}><i className={heart()}></i></button>
                    <Link to={`/products/${product.id}`}>
                        <div className="product-image-container">
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