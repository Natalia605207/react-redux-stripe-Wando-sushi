import { useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Parallax = () => {

    const animation = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    tl.current = gsap
        .timeline()
        .from("h1", {
            delay: 3.1 ,duration: 0.8, y: -40, ease: "power0.easeNone", opacity: 0
        })
        .from("h2", {
            duration: 0.9, y: -60, ease: "power0.easeNone", opacity: 0
        })
        .from(".promo-btn", {
            duration: 1, y: 30, ease: "power0.easeNone", opacity: 0
        });
    }, animation);
    return () => ctx.revert()
}, []);

    return(<div className="parallax column">
        <div className="cover column" ref={animation}>
        <h1>Yummy Sushi</h1>
        <h2>Natural and fresh ingredients</h2>
        <Link to="/promo">
        <button className="promo-btn">See promo</button>
        </Link>
        </div>
    </div>)
}

export default Parallax;
