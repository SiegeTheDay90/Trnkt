import { useDispatch, useSelector } from 'react-redux';
import { fetchShops } from "../../store/shops";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Splash = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchShops())
    }, []);

    const shops = useSelector(state => state.shops)
    if (!shops) return null;
    return (
        <ul>
        {Object.values(shops).map((shop) => (
            <Link to={`/shops/${shop.id}`} key={shop.id}><li key={shop.id}>{shop.name}</li></Link>
        ))}
        </ul>
    )
}

export default Splash;