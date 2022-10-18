import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductListItem = (props) => {

    const id = props.id;
   
    const product = useSelector(state => state.products[id]);

    return (
        <Link to={`/products/${id}`}>
            <div className="item">
                <img src={product.photoUrl} alt={product.name}/>
                <span className="item-title">{product.name}</span>
                <span className="item-price">${product.price.toFixed(2)}</span>
            </div>
        </Link>
    )
}

export default ProductListItem;