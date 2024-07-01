import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return(
        <div className="flex">
            <div className="dishPhotoInCart">
            <img  className="dish-image" src={`./assets/${dishes.img}.jpg`} alt="dish" />
            </div>
            <div className="dishInCart">
                <div className="addedPortions">
                    <p className="dishNameInCart font">{ dishes.name }</p>
                    <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt className="trash-bin font"/>
                    </span>
                </div>
            <p className="cart-price">{ cartItem.quantity } portion(s)</p>
            <p className="cart-price">Price: ${dishes.price * cartItem.quantity}</p>
            </div>
        </div>
    )
}

export default CartItem;