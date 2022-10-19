import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartListItem from "./CartListItem";


const CartList = ({ cart }) => {

    const products = Object.values(cart);


    if(products.length === 0){
        return null
    }

    return (
        <ol id="cart-item-list">
        {products.map((product) => (
            <CartListItem key={product.id} product={product} />
        ))}
        </ol>
    )
}

export default CartList;