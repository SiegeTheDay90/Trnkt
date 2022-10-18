import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartListItem from "./CartListItem";


const CartList = ({ cart }) => {

    const products = Object.values(cart);


    if(products.length === 0){
        return (
            <h1>There are no products in your cart.</h1>
        )
    }

    return (
        <ol>
        {products.map((product) => (
            <CartListItem key={product.id} product={product} />
        ))}
        </ol>
    )
}

export default CartList;