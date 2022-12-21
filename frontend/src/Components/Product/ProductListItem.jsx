import { Link } from 'react-router-dom'
import './styles/ProductListItem.css'

const ProductListItem = ({ product }) => {

    return (
        <>
        {
            product 
            ? <Link to={`/products/${product.id}`}>
                <div className="product-li" >
                    <div className="product-image-container">
                        <img className="product-image card-image" src={product.photoUrl} alt={product.name}/>
                    </div>
                    <div className="product-details">
                        <span className="item-detail name">{product.name}</span>
                        <span className="item-detail">${product.price.toFixed(2)}</span>
                    </div>
                </div>
            </Link>

            :<h1>Loading...</h1>
        }
        </>
    )
}

export default ProductListItem;