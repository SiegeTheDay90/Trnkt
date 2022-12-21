import '../Navigation/TopShopsGrid.css'
import './Shop.css'
import { Link } from 'react-router-dom';

const ShopCard = ({shop}) => {

    return(
        <Link to={`/shops/${shop.id}`}>
            <div className="shop-card">
                <div className="shop-image card-image">
                    <img src={shop.photoUrl} alt={shop.name} />
                </div>
                <div >{shop.name}</div>
            </div>
        </Link>
    )
}

export default ShopCard;