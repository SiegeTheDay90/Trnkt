import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../store/products";
import { useEffect } from "react";
import './Splash.css'
import { Link } from 'react-router-dom';


const Splash = () => {
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, []);

    const fetchedProducts = useSelector(state => state.products)
    const featuredProducts = Object.values(fetchedProducts);
    if (!featuredProducts[7]) return null;

    return (
        <div id="splash-container">
            <h1 className="splash-heading">Featured Products</h1>
            <Link to={`/products/${featuredProducts[0].id}`}>
                <div className="larger item-1 splash-item"><img src={featuredProducts[0].photoUrl} alt="featured product" /></div>
            </Link>
            <Link to={`/products/${featuredProducts[1].id}`}>
                <div className="smaller item-2 splash-item"><img src={featuredProducts[1].photoUrl} alt="featured product" /></div>
            </Link>
            <Link to={`/products/${featuredProducts[2].id}`}>
                <div className="smaller item-3 splash-item"><img src={featuredProducts[2].photoUrl} alt="featured product" /></div>
            </Link>
            <Link to={`/products/${featuredProducts[3].id}`}>
                <div className="larger item-4 splash-item"><img src={featuredProducts[3].photoUrl} alt="featured product" /></div>
            </Link>
            <Link to={`/products/${featuredProducts[4].id}`}>
                <div className="larger item-5 splash-item"><img src={featuredProducts[4].photoUrl} alt="featured product" /></div>
            </Link>
            <Link to={`/products/${featuredProducts[5].id}`}>
                <div className="smaller item-6 splash-item"><img src={featuredProducts[5].photoUrl} alt="featured product" /></div>
            </Link>
            <Link to={`/products/${featuredProducts[6].id}`}>
                <div className="smaller item-7 splash-item"><img src={featuredProducts[6].photoUrl} alt="featured product" /></div>
            </Link>
            <Link to={`/products/${featuredProducts[7].id}`}>
                <div className="larger item-8 splash-item"><img src={featuredProducts[7].photoUrl} alt="featured product" /></div>
            </Link>
        </div>
        // <ul>
        // {Object.values(shops).map((shop) => (
        //     <Link to={`/shops/${shop.id}`} key={shop.id}><li key={shop.id}>{shop.name}</li></Link>
        // ))}
        // </ul>
    )
}

export default Splash;