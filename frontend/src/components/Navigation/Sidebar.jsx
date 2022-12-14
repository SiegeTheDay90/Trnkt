import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import { fetchShops } from "../../store/shops";
import DeveloperCard from "./DeveloperCard";
import './styles/Navigation.css'
import Dropdown from "./Dropdown";

const Sidebar = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShops());
        dispatch(fetchProducts([{num: 8, title:'Durable'}, {num: 8, title:'Silk'}, {num: 8, title:'Awesome'}, {num: 8, title:'Wallet'}]));
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
        <span className="side-category side-top-sellers">
            Top Selling Shops
            <div className="side-dropdown-container">
                <Dropdown featured={topSellers} />
            </div>
        </span>

        <span className="side-category side-best-rated">
            Highest Rated Shops
            <div className="side-dropdown-container">
                <Dropdown featured={topRated} />
            </div>
        </span>

        <span className="side-category side-durable-items">
            Durable Items
            <div className="side-dropdown-container">
                <Dropdown featured={durables} />
            </div>
        </span>
        
        <span className="side-category side-silk-items">
            Slip into Something Silky
            <div className="side-dropdown-container">
                <Dropdown featured={silks} />
            </div>
        </span>

        <span className="side-category side-awesome-items">
            Awesome is the Name
            <div className="side-dropdown-container">
                <Dropdown featured={awesomes} />
            </div>
        </span>

        <span className="side-category side-wallet-items">
            Great Wallets
            <div className="side-dropdown-container">
                <Dropdown featured={wallets} />
            </div>
        </span>

        <span className="side-category side-dev-details">
            Developed by C. Smith
            <div className="side-dropdown-container">
                <DeveloperCard />
            </div>
        </span>
      </>
    )
}

export default Sidebar;