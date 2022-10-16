import { useSelector } from "react-redux";


const ProductListItem = (props) => {

    const product = useSelector(state => state.products[props.id]);

    return (
        <div className="item">
            <img src="https://picsum.photos/256/206" />
            <span className="item-title">{product.name}</span>
            <span className="item-price">${product.price.toFixed(2)}</span>
        </div>
    )
}

export default ProductListItem;