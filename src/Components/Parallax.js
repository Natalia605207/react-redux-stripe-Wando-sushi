import backVideo from "../assets/back.mp4";
import { Link } from "react-router-dom";

const Parallax = () => {
    return(
        <div>
        <video autoPlay muted loop>
            <source src={backVideo} type='video/mp4'/>
        </video>
        <div className="cover column">
        <h1>Yummy Sushi</h1>
        <h2>Natural and fresh ingredients</h2>
        <Link to="/promo">
        <button className="promo-btn">See promo</button>
        </Link>
        </div>
        </div>
)
}

export default Parallax;
