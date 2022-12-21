import { Link } from "react-router-dom";
import './SearchListItem.css'

const SearchListItem = ({object, type}) => {

    return (

            <li className="search-item foreground-container">
            <img src={object.photoUrl} alt={object.name}/>
                <div className="search-item-details">
                    <Link to={`/${type}s/${object.id}`}><div className="search-item-title">{object.name}</div></Link>
                    <div className="search-item-description">{object.description}</div>
                </div>
            
                <div className="search-item-right">
                    {type === "product" &&
                    <span className="search-item-price">${object.price.toFixed(2)}</span>
                    }
                    {type === "shop" &&
                    <>
                        <span className="search-item-sales">{object.sales} sales</span>
                        <span className="search-item-rating">Rating: {object.rating}</span>
                    </>
                    }
                </div>
            </li>

    )
}

export default SearchListItem;