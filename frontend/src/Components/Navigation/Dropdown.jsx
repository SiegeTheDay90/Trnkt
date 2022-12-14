import ItemCardSmall from '../Shared/ItemCardSmall.jsx';
import './NavCategories.css'

const Dropdown = ({items}) => {
    if(!items[7]) return null;
    return (
        <div className="nav-dropdown-content">
            <ItemCardSmall item = {items[0]}/>
            <ItemCardSmall item = {items[1]}/>
            <ItemCardSmall item = {items[2]}/>
            <ItemCardSmall item = {items[3]}/>
            <ItemCardSmall item = {items[4]}/>
            <ItemCardSmall item = {items[5]}/>
            <ItemCardSmall item = {items[6]}/>
            <ItemCardSmall item = {items[7]}/>
        </div>
    )
}

export default Dropdown;