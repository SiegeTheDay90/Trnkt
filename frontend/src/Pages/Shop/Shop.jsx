import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchShop, fetchShops, likeShop } from "../../store/shops";
import { useEffect, useState } from "react";
import ProductListItem from '../../Components/Product/ProductListItem.jsx';
import './Shop.css';

const Shop = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchShop(id));
        // dispatch(fetchShops({num: 4}));
    }, [id]);
    
    
    const shops = useSelector(state => state.shops);
    const users = useSelector(state => state.users);

    const shop = shops[id];
    // const otherShops = Object.values(shops).filter(ele => ele.id != id);

    const [liked, setLiked] = useState(false);
    
    let seller = {firstName: "First"};
    if (shop && users){
        seller = users[shop.sellerId]
        if(shop.liked === "true"){
            setLiked(true)
        }
    }

    const products = useSelector(state => state.products);
    if (!seller) return null;
    
    const followClick = () => {

        dispatch(likeShop(shop.id))
        const value = liked ? false : true;
        setLiked(value);
    }

    const heart = () => {
        if(!shop.liked){
            return "fa-regular fa-heart"
        } else{
            return "fa-solid fa-heart"
        }
    }
    

    return (
        <>{
            shop ?
            <div id="shop-outer-container">
                <img id="shop-cover-photo" src={shop.coverPhotoUrl} alt="cover photo"/>
                <div id="shop-info-container">
                    <div id="header">
                        <div id="header-left">
                            <img id="shop-logo" src={shop.photoUrl} alt="shop logo"/>
                            <div id="shop-info">
                                <h1>{shop.name}</h1>
                                <p id="description">{shop.description}</p>
                                <p id="location">{shop.state}, {shop.country}</p>
                                <div id="ratings">
                                    <p id="sales">{shop.sales} sales |&nbsp;</p>
                                    <p id="rating">Rating: {shop.rating}</p>
                            <button id="button-follow" onClick={followClick}><i className={heart()} ></i> &nbsp;{shop.liked ? 'Following' : 'Follow shop'}</button>
                                </div>
                            </div>

                        </div>

                        <div id="header-right">
                            <img id="profile-pic" src={seller.photoUrl} alt="seller-pic"/>
                            <p id="seller-name">{seller.firstName}</p>
                            <button><i className="fa-solid fa-envelope-open-text"></i> Contact</button>
                        </div>

                    </div>
                    <div id="shop-main">
                        <h1>Items</h1>
                        <div id="shop-main-item-container">
                            <div id="shop-item-grid">
                                {Object.values(products).map((product) => (
                                    <ProductListItem product={product}/>
                                ))}                                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <marquee><h1>Loading...</h1></marquee>}
        </>
    )
}

export default Shop;