import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/Product/ProductCard.jsx'
import CircularBadge from '../../Components/Shared/CircularBadge.jsx';
import './Splash.css'

const Splash = () => {

    const featuredProducts = useRef([])
    // const [loaded, setLoaded] = useState(false)
    const fetchedProducts = useSelector(state => state.products)

    
    useEffect(()=>{
        if (Object.values(fetchedProducts)[9]) {
            // featuredProducts.current =  Object.values(fetchedProducts).shuffle().slice(0,10);
            featuredProducts.current =  Object.values(fetchedProducts).slice(0,10);
            // setLoaded(true)
        }
    },[fetchedProducts])
    
    
    
    const Interceptor = {
        name: "Interceptor",
        image: "https://siegetheday90.github.io/Interceptor/images/logo-no-text.png",
        url: "https://siegetheday90.github.io/Interceptor/"
    }
    const Advent = {
        name: "Advent of Code",
        image: "https://i.imgur.com/LzV0Ec1.png",
        url: "https://github.com/SiegeTheDay90/Advent-of-code-2022"
    }
    const RisingSign = {
        name: "Rising Sign",
        image: "https://i.imgur.com/i13PX9f.png",
        url: "https://rising-sign.onrender.com/"
    }
    const LinkedIn = {
        name: "LinkedIn",
        image: "https://i.imgur.com/MLYTVpn.png",
        url: "https://www.linkedin.com/in/clarence-smith-nyc/"
    }
    const Personal = {
        name: "Personal Site",
        image: "https://i.imgur.com/GrhND4Z.png",
        url: "https://siegetheday90.github.io/personal-site/"
    }


    return (
        <>
        <div id="splash-top">
            <h1 className="splash-heading">Welcome to Trnkt</h1>
            <p className="splash-blurb">More from Clarence Smith</p>
            <CircularBadge object={Interceptor} />
            <CircularBadge object={Advent} />
            <CircularBadge object={Personal} />
            <CircularBadge object={LinkedIn} />
            <CircularBadge object={RisingSign} />
        </div>
        <div id="splash-middle">
            <ProductCard product = {featuredProducts.current[0]} />
            <ProductCard product = {featuredProducts.current[1]} />
            <ProductCard product = {featuredProducts.current[2]} />
            <ProductCard product = {featuredProducts.current[3]} />
            <ProductCard product = {featuredProducts.current[4]} />
            <ProductCard product = {featuredProducts.current[5]} />
            <ProductCard product = {featuredProducts.current[6]} />
            <ProductCard product = {featuredProducts.current[7]} />
            <ProductCard product = {featuredProducts.current[8]} />
            <ProductCard product = {featuredProducts.current[9]} />
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