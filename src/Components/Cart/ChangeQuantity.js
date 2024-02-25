import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return(<div className="quantity-control">
        <button className="addDeleteBtn" onClick={removeQuantity}><FaMinus className="minus"/></button>
        <span className="addedQuantity">{quantity}</span>
        <button className="addDeleteBtn" onClick={addQuantity}><FaPlus /></button>
    </div>)
}

export default ChangeQuantity;