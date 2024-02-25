import { useRef, useLayoutEffect } from 'react';
import Filter from "./Filter";
import { gsap } from "gsap";

const AllCategories = () => {

    const categoriesAnimation = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    tl.current = gsap
        .timeline()
        .from(".menuAnimation", {
            delay: 6, duration: 1, x: -15 , ease: "power0.easeNone", opacity: 0
        })
        .from(".categoriesAnimation", {
            duration: 1, y: 30, ease: "power0.easeNone", opacity: 0
        });
    }, categoriesAnimation);
    return () => ctx.revert()
}, []);

    return(
        <div ref={categoriesAnimation}>
            <h3 className="center menuAnimation">Our Menu</h3>
            <div className="line categoriesAnimation">
            {['ALL', 'SOUP', 'SALAD', 'SUSHI', 'ROLLS', 'SETS', 'DESSERTS']
            .map( (category, index) => <Filter category={category} key={index}/>
            )}
            </div>
        </div>
    )
}

export default AllCategories;