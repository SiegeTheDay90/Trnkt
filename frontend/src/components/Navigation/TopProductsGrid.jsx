import { Link } from 'react-router-dom';
import './TopShopsGrid.css'


const TopProductsGrid = ({products}) => {
    if(!products[7]) return null;
    return (
        <div className="nav-dropdown-content">
            <Link to={`/products/${products[0].id}`}>
                <div className="larger item-1 splash-item"><img src={products[0].photoUrl} alt="top seller" /></div>
                <div >{products[0].name}</div>
            </Link>
            <Link to={`/products/${products[1].id}`}>
                <div className="smaller item-2 splash-item"><img src={products[1].photoUrl} alt="top seller" /></div>
                <div >{products[1].name}</div>
            </Link>
            <Link to={`/products/${products[2].id}`}>
                <div className="smaller item-3 splash-item"><img src={products[2].photoUrl} alt="top seller" /></div>
                <div >{products[2].name}</div>
            </Link>
            <Link to={`/products/${products[3].id}`}>
                <div className="larger item-4 splash-item"><img src={products[3].photoUrl} alt="top seller" /></div>
                <div >{products[3].name}</div>
            </Link>
            <Link to={`/products/${products[4].id}`}>
                <div className="larger item-5 splash-item"><img src={products[4].photoUrl} alt="top seller" /></div>
                <div >{products[4].name}</div>
            </Link>
            <Link to={`/products/${products[5].id}`}>
                <div className="smaller item-6 splash-item"><img src={products[5].photoUrl} alt="top seller" /></div>
                <div >{products[5].name}</div>
            </Link>
            <Link to={`/products/${products[6].id}`}>
                <div className="smaller item-7 splash-item"><img src={products[6].photoUrl} alt="top seller" /></div>
                <div >{products[6].name}</div>
            </Link>
            <Link to={`/products/${products[7].id}`}>
                <div className="larger item-8 splash-item"><img src={products[7].photoUrl} alt="top seller" /></div>
                <div >{products[7].name}</div>
            </Link>
        </div>
    )
}

export default TopProductsGrid;