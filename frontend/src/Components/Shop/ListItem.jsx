import { Link } from "react-router-dom";


const ProductListItem = ({product}) => {

    return (
        <Link to={`/products/${product.id}`}>
            <div className="item">
                <img src={product.photoUrl} alt={product.name}/>
                <span className="item-title">{product.name}</span>
                <span className="item-price">${product.price.toFixed(2)}</span>
            </div>
        </Link>
    )
}

export default ProductListItem;