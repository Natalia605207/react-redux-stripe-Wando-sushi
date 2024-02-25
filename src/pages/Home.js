import Dishes from "../Components/DishesComponents/Dishes";
import AllCategories from "../Components/Filter/AllCategories";
import Footer from "../Components/Footer";
import Parallax from "../Components/Parallax";

const Home = () => {
    return(
        <div>
            <Parallax />
            <div className="container">
                <AllCategories />
            </div>
            <div  className="container padding-bottom">
                <Dishes />
            </div>
            <Footer />
    </div>)
}

export default Home;