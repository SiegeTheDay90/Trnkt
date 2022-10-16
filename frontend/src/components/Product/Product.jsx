import { useDispatch, useSelector } from 'react-redux';
import './Product.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import ProductListItem from './ProductListItem';
import { fetchProduct } from '../../store/products';
import ProductCarousel from './ProductCarousel';

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [id]);


    const product = useSelector(state => state.products[id]);


    return (
        <>
        {product &&
        <div id="product-outer-container">
            <div id="product-header-container">
                <div id="product-header-left">
                    <h1>Product Carousel</h1>
                    <ProductCarousel id={id}/>
                </div>
                <div id="product-header-right">
                    <h1>Product Menu</h1>
                    {/* <ProductMenu id={id} /> */}
                </div>
            </div>
        </div>}
        {!product && <h1>Invalid product ID</h1>}
        </>
    )
}

export default Product;