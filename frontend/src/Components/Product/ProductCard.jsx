import { Link } from 'react-router-dom'
import './styles/ProductCard.css'

const ProductCard = ({ product }) => {

    return (
        <>
        {
            product 
            ? <Link to={`/products/${product.id}`}>
                <div className="product-card" >
                    <div className="product-image-container">
                        <img className="product-image card-image" src={product.photoUrl} alt={product.name}/>
                    </div>
                    <div className="product-details">
                        <span className="item-detail name">{product.name}</span>
                        <span className="item-detail">${product.price.toFixed(2)}</span>
                    </div>
                </div>
            </Link>

            : <marquee><h1>Loading...</h1></marquee>
        }
        </>
    )
}

export default ProductCard;