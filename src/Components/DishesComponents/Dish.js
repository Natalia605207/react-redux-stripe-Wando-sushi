import { React, useEffect, useRef } from 'react';
import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(el, { y: 50, opacity:0 }, {
            y: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: el,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        })
    }, [])

    return(
        <div className="dish" ref={ref}>
            <img className="dish-image" src={`./assets/${dish.img}.jpg`} alt="dish" />
            <p className="dish-name">{dish.name}</p>
            <p className="dish-ingredients">{dish.ingredients}</p>
            <div>
                <div className="addedPortions">
                    <p className="dish-price">$ {dish.price}</p>
                    <ChangeQuantity quantity = {quantity} setQuantity={setQuantity}/>
                </div>
                <button className="addToCartBtn" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
            </div>
        </div>
    )
}

export default Dish;