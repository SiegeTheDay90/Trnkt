import '../Navigation/styles/Dropdown.css'
import './Shop.css'
import { Link } from 'react-router-dom';

const ShopLeft = ({shops}) => {

    return(
        <div id="other-shops-container">
            <h1>Other Shops You Might Likes</h1>
            <Link to={`/shops/${shops[0].id}`}>
                <div className="other-shops-item"><img src={shops[0].photoUrl} alt="Shop You May Like" /></div>
                <div >{shops[0].name}</div>
            </Link>

            <Link to={`/shops/${shops[1].id}`}>
                <div className="other-shops-item"><img src={shops[1].photoUrl} alt="Shop You May Like" /></div>
                <div >{shops[1].name}</div>
            </Link>

            <Link to={`/shops/${shops[2].id}`}>
                <div className="other-shops-item"><img src={shops[2].photoUrl} alt="Shop You May Like" /></div>
                <div >{shops[2].name}</div>
            </Link>

            <Link to={`/shops/${shops[3].id}`}>
                <div className="other-shops-item"><img src={shops[3].photoUrl} alt="Shop You May Like" /></div>
                <div >{shops[3].name}</div>
            </Link>
        </div>
    )
}

export default ShopLeft;