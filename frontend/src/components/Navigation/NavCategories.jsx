import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/";
import { fetchShops } from "../../store/shops";
import './Navigation.css'
import TopSellersGrid from "./TopSellersGrid";

const NavCategories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShops());
    }, []);

    const fetchedShops = useSelector(state => state.shops);
    const shops = Object.values(fetchedShops);
    shops.sort((a, b) => b.sales - a.sales);

    const topSellers = shops.slice(0,8);

    shops.sort((a, b) => b.rating - a.rating);

    const topRated = shops.slice(0,8);



    if (!shops[0]) return null;
    return (
      <>
        <span className="nav-category nav-top-sellers">
            Top Sellers
            <div className="nav-dropdown-container">
                <TopSellersGrid topSellers={topSellers} />
            </div>
        </span>

        <span className="nav-category nav-top-sellers">
            Best Rated
            <div className="nav-dropdown-container">
                <TopSellersGrid topSellers={topRated} />
            </div>
        </span>
                <span className="nav-category">Clothing & Shoes</span>
        <span className="nav-category">Home & Living</span>
        <span className="nav-category">Wedding & Party</span>
        <span className="nav-category">Toys & Entertainment</span>
        <span className="nav-category">Art & Collectibles</span>
        <span className="nav-category">Craft Supplies</span>
        <span className="nav-category">Gifts & Gift Cards</span>

      </>
    )
}

export default NavCategories;