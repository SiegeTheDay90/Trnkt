import { useSelector } from 'react-redux';
import './styles/Display.css'

const Display = ({product}) => {

    return (
        <>
        {product &&
        <div id="product-carousel-container">
            {/* <div id="product-carousel-list">
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
                <img className="product-carousel-list-image" src={product.photoUrl} alt="Product"/>
            </div> */}
            <div id="product-image-container">
                <img id="product-image" src={product.photoUrl} alt="Product"/>
            </div>
        </div>}
        </>
    )
}

export default Display;