import { Link } from 'react-router-dom';
import './TopShopsGrid.css'


const TopShopsGrid = ({shops}) => {
    if(!shops[7]) return null;
    return (
        <div className="nav-dropdown-content">
            <Link to={`/shops/${shops[0].id}`}>
                <div className="larger item-1 splash-item"><img src={shops[0].photoUrl} alt="top seller" /></div>
                <div >{shops[0].name}</div>
            </Link>
            <Link to={`/shops/${shops[1].id}`}>
                <div className="smaller item-2 splash-item"><img src={shops[1].photoUrl} alt="top seller" /></div>
                <div >{shops[1].name}</div>
            </Link>
            <Link to={`/shops/${shops[2].id}`}>
                <div className="smaller item-3 splash-item"><img src={shops[2].photoUrl} alt="top seller" /></div>
                <div >{shops[2].name}</div>
            </Link>
            <Link to={`/shops/${shops[3].id}`}>
                <div className="larger item-4 splash-item"><img src={shops[3].photoUrl} alt="top seller" /></div>
                <div >{shops[3].name}</div>
            </Link>
            <Link to={`/shops/${shops[4].id}`}>
                <div className="larger item-5 splash-item"><img src={shops[4].photoUrl} alt="top seller" /></div>
                <div >{shops[4].name}</div>
            </Link>
            <Link to={`/shops/${shops[5].id}`}>
                <div className="smaller item-6 splash-item"><img src={shops[5].photoUrl} alt="top seller" /></div>
                <div >{shops[5].name}</div>
            </Link>
            <Link to={`/shops/${shops[6].id}`}>
                <div className="smaller item-7 splash-item"><img src={shops[6].photoUrl} alt="top seller" /></div>
                <div >{shops[6].name}</div>
            </Link>
            <Link to={`/shops/${shops[7].id}`}>
                <div className="larger item-8 splash-item"><img src={shops[7].photoUrl} alt="top seller" /></div>
                <div >{shops[7].name}</div>
            </Link>
        </div>
    )
}

export default TopShopsGrid;