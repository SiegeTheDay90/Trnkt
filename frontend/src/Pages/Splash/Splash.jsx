import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/Product/ProductCard.jsx'
import './Splash.css'


const Splash = () => {

    const [featuredProducts, setFeaturedProducts] = useState([])
    const fetchedProducts = useSelector(state => state.products)
    let holder;
    const arr = [] 
    
    useEffect(()=>{
        holder = Object.values(fetchedProducts).shuffle().slice(0,8);

        holder.forEach((product) => {
            arr.push(product)
        })

        setFeaturedProducts(arr)
    },[fetchedProducts])




    if (!featuredProducts[7]) return null;

    return (
        <div id="splash-container">
            <h1 className="splash-heading">Featured Products</h1>
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