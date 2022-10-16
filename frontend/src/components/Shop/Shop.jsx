import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './Shop.css'
import { useParams } from "react-router-dom";
import { getShop } from "../../store/shops";
import { useEffect } from "react";

const Shop = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        debugger;
        dispatch(getShop(id))
    }, [id]);


    const shop = useSelector(state => state.shops[id]);


    return (
        <>
        {shop &&
        <div id="shop-outer-container">
            <img id="shop-cover-photo" src={shop.coverphotourl}/>
            <div id="shop-info-container">
                <div id="header">
                    <div id="header-left">
                        <img id="shop-logo" src="https://picsum.photos/120/120"/>
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
                        <img id="profile-pic" src="https://picsum.photos/75/75"/>
                        <p id="seller-name">{shop.seller.first_name}</p>
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
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
                            <div className="item">
                                <img src="https://picsum.photos/256/206" />
                                <span className="item-title">Lorem Ipsum Title Lorem Ipsum Title</span>
                                <span className="item-price">$99.99</span>
                            </div>                            
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