import { Link } from 'react-router-dom';
import './styles/TopShopsGrid.css'


const TopProductsGrid = ({products}) => {
    if(!products[7]) return null;
    return (
        <div className="nav-dropdown-content">
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/products/${products[0].id}`}>
                <div className="nav-top-div-img"><img src={products[0].photoUrl} alt="product" /></div>
                <div className="nav-top-div-name">{products[0].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/products/${products[1].id}`}>
                <div className="nav-top-div-img"><img src={products[1].photoUrl} alt="product" /></div>
                <div className="nav-top-div-name">{products[1].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/products/${products[2].id}`}>
                <div className="nav-top-div-img"><img src={products[2].photoUrl} alt="product" /></div>
                <div className="nav-top-div-name">{products[2].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/products/${products[3].id}`}>
                <div className="nav-top-div-img"><img src={products[3].photoUrl} alt="product" /></div>
                <div className="nav-top-div-name">{products[3].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/products/${products[4].id}`}>
                <div className="nav-top-div-img"><img src={products[4].photoUrl} alt="product" /></div>
                <div className="nav-top-div-name">{products[4].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/products/${products[5].id}`}>
                <div className="nav-top-div-img"><img src={products[5].photoUrl} alt="product" /></div>
                <div className="nav-top-div-name">{products[5].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/products/${products[6].id}`}>
                <div className="nav-top-div-img"><img src={products[6].photoUrl} alt="product" /></div>
                <div className="nav-top-div-name">{products[6].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/products/${products[7].id}`}>
                <div className="nav-top-div-img"><img src={products[7].photoUrl} alt="product" /></div>
                <div className="nav-top-div-name">{products[7].name}</div>
            </Link></div>
        </div>
    )
}

export default TopProductsGrid;