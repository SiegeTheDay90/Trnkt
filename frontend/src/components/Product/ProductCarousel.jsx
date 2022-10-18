import { useSelector } from 'react-redux';
import './Product.css'

const ProductCarousel = (props) => {
    const id = props.id;


    const product = useSelector(state => state.products[id]);


    return (
        <>
        {product &&
        <div id="product-carousel-container">
            <div id="product-carousel-list">
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
            </div>
            <div id="product-image-container">
                <img id="product-image" src={product.photoUrl} alt="Product"/>
            </div>
        </div>}
        </>
    )
}

export default ProductCarousel;