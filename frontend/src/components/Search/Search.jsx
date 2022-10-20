import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchProducts } from '../../store/products';
import { fetchShops } from '../../store/shops';
import SearchListItem from './SearchListItem';

const Search = () => {

    const dispatch = useDispatch();
    const { query } = useParams();
    
    useEffect(() => {
        dispatch(fetchProducts({num: 5, title: query}));
        dispatch(fetchShops({num: 5, title: query}));
    },[dispatch, query])

    
    
    const fetchedProducts = useSelector(state => state.products);
    const fetchedShops = useSelector(state => state.shops);
    
    if(query === null){
        return <Redirect to="/"></Redirect>
    }

    const products = Object.values(fetchedProducts).filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    const shops = Object.values(fetchedShops).filter(shop => shop.name.toLowerCase().includes(query.toLowerCase()));
    
    if(products.length === 0 && shops.length === 0){
        return (<h1>No items matching "{query}"</h1>)
    }
    return (
        <>
        <h1>Results matching "{query}"</h1>
        {products.length > 0 && <>
        <h2>Matching Products</h2>
        <ol id="search-list search-list-products">
            {products.map((product) => (
                <SearchListItem key={product.id} object={product} type="product" />
            ))}
        </ol>
        </>}

        {shops.length > 0 && <>
        <h2>Matching Shops</h2>
        <ol id="search-list search-list-shops">
            {shops.map((shop) => (
                <SearchListItem key={shop.id} object={shop} type="shop"/>
            ))}
        </ol>
        </>}
        </>
    )
}

export default Search;