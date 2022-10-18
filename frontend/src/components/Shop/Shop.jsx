import { useDispatch, useSelector } from 'react-redux';
import './Shop.css'
import { useParams } from "react-router-dom";
import { fetchShop } from "../../store/shops";
import { useEffect } from "react";
import ProductListItem from './ProductListItem';

const Shop = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchShop(id))
    }, [id, dispatch]);


    const shop = useSelector(state => state.shops[id]);
    const users = useSelector(state => state.users);

    let seller = {firstName: "First"};
    if (shop && users){
        seller = users[shop.sellerId]
    }
    const products = useSelector(state => state.products);
    // debugger;
    if (!seller) return null;
    

    return (
        <>
        {shop &&
        <div id="shop-outer-container">
            <img id="shop-cover-photo" src={shop.coverPhotoUrl} alt="alt text"/>
            <div id="shop-info-container">
                <div id="header">
                    <div id="header-left">
                        <img id="shop-logo" src={shop.photoUrl} alt="alt text"/>
                        <div id="shop-info">
                            <h1>{shop.name}</h1>
                            <p id="description">{shop.description}</p>
                            <p id="location">{shop.state}, {shop.country}</p>
                            <div id="ratings">
                                {false && <p>star seller</p>/*star seller logic*/}
                                <p id="sales">{shop.sales} sales |&nbsp;</p>
                                <p id="rating">Rating: {shop.rating}</p>
                        <button id="button-follow"><i className="fa-regular fa-heart"></i> &nbsp;Follow shop</button>
                            </div>
                        </div>

                    </div>
                        {false && <p>star seller pics</p>/*star seller logic*/}

                    <div id="header-right">
                        <img id="profile-pic" src={seller.photoUrl} alt="alt text"/>
                        <p id="seller-name">{seller.firstName}</p>
                        <button><i className="fa-solid fa-envelope-open-text"></i> Contact</button>
                    </div>

                </div>
                <div id="shop-main">
                    <h1>Items</h1>
                    <div id="shop-main-item-container">
                        <div id="shop-item-categories">
                            Categories
                        </div>
                        <div id="shop-item-grid">
                            {Object.values(products).map((product) => (
                                <ProductListItem id={product.id}/>
                            ))}                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        {!shop && <h1>Invalid shop ID</h1>}
        </>
    )
}

export default Shop;