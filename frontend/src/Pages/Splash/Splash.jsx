import { useSelector } from 'react-redux';
import ProductCard from '../../Components/Product/ProductCard.jsx'
import './Splash.css'


const Splash = () => {

    const fetchedProducts = useSelector(state => state.products)
    const featuredProducts = Object.values(fetchedProducts).shuffle().slice(0,8);
    if (!featuredProducts[7]) return null;

    return (
        <div id="splash-container">
            <h1 className="splash-heading">Featured Productss</h1>
            <ProductCard product = {featuredProducts[0]} />
            <ProductCard product = {featuredProducts[1]} />
            <ProductCard product = {featuredProducts[2]} />
            <ProductCard product = {featuredProducts[3]} />
            <ProductCard product = {featuredProducts[4]} />
            <ProductCard product = {featuredProducts[5]} />
            <ProductCard product = {featuredProducts[6]} />
            <ProductCard product = {featuredProducts[7]} />
        </div>
    )
}

export default Splash;

Array.prototype.shuffle = function(){
    if (this.length === 0){
        return this
    }
    
    let copy = this;
    let holder = [];

    while (copy.length > 0){
        let idx = Math.floor(Math.random()*copy.length);

        holder.push(copy[idx])
        copy = copy.slice(0, idx).concat(copy.slice(idx+1));
    }
    return holder;
}