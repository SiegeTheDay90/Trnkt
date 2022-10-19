import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../store/products";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './TopSellersGrid.css'


const TopSellersGrid = ({topSellers}) => {
    
    if(!topSellers[7]) return null;
    return (
        <div className="nav-dropdown-content">
            <Link to={`/shops/${topSellers[0].id}`}>
                <div className="larger item-1 splash-item"><img src={topSellers[0].photoUrl} alt="top seller" /></div>
                <div >{topSellers[0].name}</div>
            </Link>
            <Link to={`/shops/${topSellers[1].id}`}>
                <div className="smaller item-2 splash-item"><img src={topSellers[1].photoUrl} alt="top seller" /></div>
                <div >{topSellers[1].name}</div>
            </Link>
            <Link to={`/shops/${topSellers[2].id}`}>
                <div className="smaller item-3 splash-item"><img src={topSellers[2].photoUrl} alt="top seller" /></div>
                <div >{topSellers[2].name}</div>
            </Link>
            <Link to={`/shops/${topSellers[3].id}`}>
                <div className="larger item-4 splash-item"><img src={topSellers[3].photoUrl} alt="top seller" /></div>
                <div >{topSellers[3].name}</div>
            </Link>
            <Link to={`/shops/${topSellers[4].id}`}>
                <div className="larger item-5 splash-item"><img src={topSellers[4].photoUrl} alt="top seller" /></div>
                <div >{topSellers[4].name}</div>
            </Link>
            <Link to={`/shops/${topSellers[5].id}`}>
                <div className="smaller item-6 splash-item"><img src={topSellers[5].photoUrl} alt="top seller" /></div>
                <div >{topSellers[5].name}</div>
            </Link>
            <Link to={`/shops/${topSellers[6].id}`}>
                <div className="smaller item-7 splash-item"><img src={topSellers[6].photoUrl} alt="top seller" /></div>
                <div >{topSellers[6].name}</div>
            </Link>
            <Link to={`/shops/${topSellers[7].id}`}>
                <div className="larger item-8 splash-item"><img src={topSellers[7].photoUrl} alt="top seller" /></div>
                <div >{topSellers[7].name}</div>
            </Link>
        </div>
    )
}

export default TopSellersGrid;