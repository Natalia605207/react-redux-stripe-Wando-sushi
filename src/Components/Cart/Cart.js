import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, getTotalArticles, clearCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import emptyCart from "../../assets/empty_cart.png";
import { HashLink as Link } from "react-router-hash-link";
import Footer from "../Footer";
import { ScrollToTopBtn } from "../ScrollToTopBtn";
import { CartButtons } from "../CartButtons";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalArticles = useSelector(getTotalArticles);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div>
        <section className="column">
            {cartItems.length === 0 ? (
                <div className="column height">
                    <h3>Your cart is empty</h3>
                    <Link to="/#menu" className="cart-link">
                    <img className="cart-image" src={emptyCart} alt="cart" />
                    </Link>
                </div>
            ) : (
                <div className="cart-page column">
                    <h3 className="padding">Shopping Cart</h3>
            <div className="column-links">
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem} key={cartItem.id} />)}
            </div>
            <div className="flex-end">
            <p className="font"> Total article(s): { totalArticles }</p>
            <p className="total-price">Total amount: $ { totalPrice }</p>
            <p onClick={handleClearCart} className="clear-cart">Clear cart</p>
            </div>
            <CartButtons />
            </div>
        )}
        </section>
        <ScrollToTopBtn />
        <Footer />
        </div>
    )
}

export default Cart;