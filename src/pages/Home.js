import Dishes from "../Components/DishesComponents/Dishes";
import AllCategories from "../Components/Filter/AllCategories";
import Footer from "../Components/Footer";
import FrontPage from "../Components/FrontPage";
import { ScrollToTopBtn } from "../Components/ScrollToTopBtn";

const Home = () => {
    return(
        <section> 
            <ScrollToTopBtn />
            <FrontPage />
            <div className="container">
                <AllCategories />
            </div>
            <div  className="container padding-bottom">
                <Dishes />
            </div>
            <Footer />
    </section>)
}

export default Home;