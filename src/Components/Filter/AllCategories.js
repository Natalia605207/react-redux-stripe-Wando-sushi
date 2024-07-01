import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h3 className="center">Our Menu</h3>
            <div className="line">
            {['ALL', 'SOUP', 'SALAD', 'SUSHI', 'ROLLS', 'SETS', 'DESSERTS']
            .map( (category, index) => <Filter category={category} key={index}/>
            )}
            </div>
        </div>
    )
}

export default AllCategories;