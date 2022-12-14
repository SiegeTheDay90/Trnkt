import { Link } from 'react-router-dom';
import './styles/TopShopsGrid.css'


const TopShopsGrid = ({shops}) => {
    if(!shops[7]) return null;
    return (
        <div className="nav-dropdown-content">
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/shops/${shops[0].id}`}>
                <div className="nav-top-div-img"><img src={shops[0].photoUrl} alt="shop" /></div>
                <div className="nav-top-div-name">{shops[0].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/shops/${shops[1].id}`}>
                <div className="nav-top-div-img"><img src={shops[1].photoUrl} alt="shop" /></div>
                <div className="nav-top-div-name">{shops[1].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/shops/${shops[2].id}`}>
                <div className="nav-top-div-img"><img src={shops[2].photoUrl} alt="shop" /></div>
                <div className="nav-top-div-name">{shops[2].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/shops/${shops[3].id}`}>
                <div className="nav-top-div-img"><img src={shops[3].photoUrl} alt="shop" /></div>
                <div className="nav-top-div-name">{shops[3].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/shops/${shops[4].id}`}>
                <div className="nav-top-div-img"><img src={shops[4].photoUrl} alt="shop" /></div>
                <div className="nav-top-div-name">{shops[4].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/shops/${shops[5].id}`}>
                <div className="nav-top-div-img"><img src={shops[5].photoUrl} alt="shop" /></div>
                <div className="nav-top-div-name">{shops[5].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/shops/${shops[6].id}`}>
                <div className="nav-top-div-img"><img src={shops[6].photoUrl} alt="shop" /></div>
                <div className="nav-top-div-name">{shops[6].name}</div>
            </Link></div>
            <div className="nav-top-div"><Link className="nav-dropdown-content-a" to={`/shops/${shops[7].id}`}>
                <div className="nav-top-div-img"><img src={shops[7].photoUrl} alt="shop" /></div>
                <div className="nav-top-div-name">{shops[7].name}</div>
            </Link></div>
        </div>
    )
}

export default TopShopsGrid;