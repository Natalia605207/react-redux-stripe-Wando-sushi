import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, getTotalArticles } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

const Cart = ({active, setActive}) => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalArticles = useSelector(getTotalArticles);

    const toggleCart = () => {
        setActive(!active);
    };

    return(
        <div>
            <div className="cart-topLine padding">
            <FaShoppingBag className="your-cart" /> 
            <p className="total-price">Your order: $ { totalPrice }</p>
            <VscClose onClick={toggleCart} className="closeCartIcon" />
            </div>
            <div className="all-cartItems">
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem} key={cartItem.id} />)}
            </div>
            <p className="font padding"> { totalArticles } article(s)</p>
            <p className="total-price padding">Total amount: $ { totalPrice }</p>
        </div>
    )
}

export default Cart;