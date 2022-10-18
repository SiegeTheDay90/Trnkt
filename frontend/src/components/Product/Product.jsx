import { useDispatch, useSelector } from 'react-redux';
import './Product.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from '../../store/products';
import ProductCarousel from './ProductCarousel';
import ProductMenu from './ProductMenu';

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, []);


    const product = useSelector(state => state.products[id]);


    return (
        <>
        {product &&
        <div id="product-outer-container">
            <div id="product-header-container">
                <div id="product-header-left">
                    <ProductCarousel id={id}/>
                </div>
                <div id="product-header-right">
                    <ProductMenu id={id} />
                </div>
            </div>
        </div>}
        {!product && <h1>Invalid product ID</h1>}
        </>
    )
}

export default Product;