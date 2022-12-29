import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchShop, likeShop } from "../../store/shops";
import { useEffect, useState } from "react";
import './Shop.css';
import ShopListItem from '../../Components/Shop/ShopListItem.jsx';

const Shop = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchShop(id));
    }, [id, dispatch]);
    
    
    const shop = useSelector(state => state.shops[id]);
    const users = useSelector(state => state.users);
    const currentUser = useSelector(state => state.session.user);


    // const shop = shops[id];
    // const otherShops = Object.values(shops).filter(ele => ele.id != id);

    const [liked, setLiked] = useState(shop?.liked);
    
    let seller = {firstName: "First"};
    if (shop && users){
        seller = users[shop.sellerId]
        if(shop.liked === "true"){
            setLiked(true)
        }
    }

    const products = useSelector(state => state.products);
    if (!seller) return null;

    const showLoginModal = (e) => {
        const modal = document.getElementById('OverlayContainer');
        modal.showModal();
        document.getElementById('App').style.overflow = "hidden";
    }

    const followClick = (e) => {
        if(currentUser){
            dispatch(likeShop(shop.id));
            setLiked(!liked);
        } else {
            showLoginModal();
        }
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
                <img id="shop-cover-photo" src={shop.coverPhotoUrl} alt="cover"/>
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
                                    <ShopListItem product={product}/>
                                ))}                                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :<h1>Loading...</h1>}
        </>
    )
}

export default Shop;