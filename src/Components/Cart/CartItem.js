import { useDispatch } from "react-redux";
import { removeItemFromCart, incrementCartItemQuantity, decrementCartItemQuantity } from "../../redux/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const addQuantity = () => {
        dispatch(incrementCartItemQuantity({ dishId: cartItem.dishId }));
    };
    
    const removeQuantity = () => {
        dispatch(decrementCartItemQuantity({ dishId: cartItem.dishId }));
    };

    return(
        <div className="space-evenly">
            <img className="cartDish-image" src={`./assets/${cartItem.dishImg}.jpg`} alt="dish" />
                    <p className="dishNameInCart">{ cartItem.dishName }</p>
                    <p className="cart-price">{ cartItem.quantity } portion(s)</p>
                    <p className="cart-price">Price: ${cartItem.dishPrice * cartItem.quantity}</p>
                <div className="quantity-control more-margin">
                    <button className="addDeleteBtn" onClick={removeQuantity}><FaMinus className="minus"/></button>
                    <span className="addedQuantity">{cartItem.quantity}</span>
                    <button className="addDeleteBtn" onClick={addQuantity}><FaPlus /></button>
                </div>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt className="trash-bin font"/>
                    </span>
        </div>
    )
}

export default CartItem;