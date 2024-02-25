import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div className="center">
        <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryBtn categoryButtonSelected' : 'categoryBtn categoryButton'}>{category}</p>
    </div>)
}

export default Filter;