import { useSelector } from "react-redux";
import { getTotalArticles } from "../../redux/cartSlice";

const TotalArticlesNavbar = () => {
    const totalArticles = useSelector(getTotalArticles);

    return ( 
        <div>
            <p className="quantity">{ totalArticles }</p>
        </div>
        
    )
}
export default TotalArticlesNavbar;