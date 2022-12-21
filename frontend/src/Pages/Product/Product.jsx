import { useDispatch, useSelector } from 'react-redux';
import './Product.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from '../../store/products';
import Display from '../../Components/Product/Display';
import PurchaseMenu from '../../Components/Product/PurchaseMenu';

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch, id]);


    const product = useSelector(state => state.products[id]);

    return (
        <>
        {product &&
        <div id="product-outer-container">
            <div id="product-header-container">
                <div id="product-header-left">
                    <Display id={id}/>
                </div>
                <div id="product-header-right">
                    <PurchaseMenu id={id} />
                </div>
            </div>
        </div>}
        {!product && <h1>Invalid product ID</h1>}
        </>
    )
}

export default Product;