import { Link } from 'react-router-dom';
import './styles/ItemCardSmall.css';


const ItemCardSmall = ({item}) => {
    if(!item) return null;
   
    return ( 

        <Link className="item-card small" to={`/${item.type}s/${item.id}`}>
            <div className="card-image small">
                <img src={item.photoUrl} alt={item.name} />
            </div>
            <div className="card-text small">
                {item.name}
            </div>
        </Link>
    )
}

export default ItemCardSmall;