import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import { fetchShops } from "../../store/shops";
import './Navigation.css'
import TopProductsGrid from "./TopProductsGrid";
import TopShopsGrid from "./TopShopsGrid";

const NavCategories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShops());
        dispatch(fetchProducts({num: 8, title:'Durable'}));
        dispatch(fetchProducts({num: 8, title:'Silk'}));
        dispatch(fetchProducts({num: 8, title:'Awesome'}));
        dispatch(fetchProducts({num: 8, title:'Wallet'}));
    }, [dispatch]);

    const fetchedShops = useSelector(state => state.shops);
    const fetchedProducts = useSelector(state => state.products);
    const shops = Object.values(fetchedShops);
    const products = Object.values(fetchedProducts);
    shops.sort((a, b) => b.sales - a.sales);

    const topSellers = shops.slice(0,8);

    shops.sort((a, b) => b.rating - a.rating);

    const topRated = shops.slice(0,8);

    const durables = products.filter(product => product.name.includes('Durable'));
    const silks = products.filter(product => product.name.includes('Silk'));
    const awesomes = products.filter(product => product.name.includes('Awesome'));
    const wallets = products.filter(product => product.name.includes('Wallet'));



    if (!shops[0] || !products[0]) return null;
    return (
      <>
        <span className="nav-category nav-top-sellers">
            Top Selling Shops
            <div className="nav-dropdown-container">
                <TopShopsGrid shops={topSellers} />
            </div>
        </span>

        <span className="nav-category nav-best-rated">
            Highest Rated Shops
            <div className="nav-dropdown-container">
                <TopShopsGrid shops={topRated} />
            </div>
        </span>

        <span className="nav-category nav-durable-items">
            Durable Items
            <div className="nav-dropdown-container">
                <TopProductsGrid products={durables} />
            </div>
        </span>
        
        <span className="nav-category nav-silk-items">
            Slip into Something Silky
            <div className="nav-dropdown-container">
                <TopProductsGrid products={silks} />
            </div>
        </span>

        <span className="nav-category nav-awesome-items">
            Awesome is the Name
            <div className="nav-dropdown-container">
                <TopProductsGrid products={awesomes} />
            </div>
        </span>

        <span className="nav-category nav-wallet-items">
            Great Wallets
            <div className="nav-dropdown-container">
                <TopProductsGrid products={wallets} />
            </div>
        </span>
        
        {/* <span className="nav-category">Wedding & Party</span>
        <span className="nav-category">Toys & Entertainment</span>
        <span className="nav-category">Art & Collectibles</span>
        <span className="nav-category">Craft Supplies</span>
        <span className="nav-category">Gifts & Gift Cards</span> */}

      </>
    )
}

export default NavCategories;