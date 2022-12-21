import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/Product/ProductCard.jsx'
import CircularBadge from '../../Components/Shared/CircularBadge.jsx';
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
    
    
    
    const Interceptor = {
        name: "Interceptor",
        image: "https://i.imgur.com/ckOh0yf.png",
        url: "https://siegetheday90.github.io/Interceptor/"
    }
    const Advent = {
        name: "Advent of Code",
        image: "https://i.imgur.com/bA8Cl7K.png",
        url: "https://github.com/SiegeTheDay90/Advent-of-code-2022"
    }
    const RisingSign = {
        name: "Rising Sign",
        image: "https://i.imgur.com/gfjcA0V.png",
        url: "https://rising-sign.onrender.com/"
    }
    const LinkedIn = {
        name: "LinkedIn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/640px-LinkedIn_icon_circle.svg.png",
        url: "https://www.linkedin.com/in/clarence-smith-nyc/"
    }
    const Personal = {
        name: "Personal Site",
        image: "https://i.imgur.com/KyozHTj.png",
        url: "https://siegetheday90.github.io/personal-site/"
    }

    if (!featuredProducts[7]) return null;

    return (
        <>
        <div id="splash-top">
            <h1 className="splash-heading">More from Clarence Smith</h1>
            <CircularBadge object={Interceptor} />
            <CircularBadge object={Advent} />
            <CircularBadge object={RisingSign} />
            <CircularBadge object={LinkedIn} />
            <CircularBadge object={Personal} />
        </div>
        <div id="splash-middle">
            <ProductCard product = {featuredProducts[0]} />
            <ProductCard product = {featuredProducts[1]} />
            <ProductCard product = {featuredProducts[2]} />
            <ProductCard product = {featuredProducts[3]} />
            <ProductCard product = {featuredProducts[4]} />
            <ProductCard product = {featuredProducts[5]} />
            <ProductCard product = {featuredProducts[6]} />
            <ProductCard product = {featuredProducts[7]} />
        </div>
        </>
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