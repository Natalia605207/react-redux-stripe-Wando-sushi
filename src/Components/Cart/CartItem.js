import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    return(
        <div className="flex">
            <div className="dishPhotoInCart">
            <img  className="dish-image" src={`./assets/${cartItem.img}.jpg`} alt="dish" />
            </div>
            <div className="dishInCart">
                <div className="addedPortions">
                    <p className="dishNameInCart font">{ cartItem.name }</p>
                    <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt className="trash-bin font"/>
                    </span>
                </div>
            <p className="cart-price">{ cartItem.quantity } portion(s)</p>
            <p className="cart-price">Price: ${cartItem.price * cartItem.quantity}</p>
            </div>
        </div>
    )
}

export default CartItem;