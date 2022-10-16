import { useDispatch, useSelector } from 'react-redux';
import './Product.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from '../../store/products';

const ProductCarousel = (props) => {
    const id = props.id;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [id]);


    const product = useSelector(state => state.products[id]);


    return (
        <>
        {product &&
        <div id="product-carousel-container">
            <div id="product-carousel-list">
                List
            </div>
            <img src="https://picsum.photos/500/500" alt="Product Image"/>
        </div>}
        {!product && <h1>Invalid product ID</h1>}
        </>
    )
}

export default ProductCarousel;