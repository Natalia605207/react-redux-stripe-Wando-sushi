import { HashLink as Link } from "react-router-hash-link";

export const CartButtons = () => {
    return(
        <div className="cart-btnGroup">
            <Link to="/#menu" className="cart-link">
            <button className="btn backToMenu-btn">Back to Menu</button>
            </Link>
            <Link to="/payment" className="cart-link">
            <button className="btn payment-btn">Checkout</button>
            </Link>
        </div>
    )
}