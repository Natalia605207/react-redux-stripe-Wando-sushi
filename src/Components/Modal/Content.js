import './Modal.css';
import { IoCloseSharp } from "react-icons/io5";

const Content = ( {setModalIsOpen} ) => {
    return(
        <div className="modal_content">
            <div className="cover-modal">
            <IoCloseSharp className="close-modal" onClick={() => setModalIsOpen(false)} />
            <p className="modal-text">Pick up your order and get a <span className="price">30%</span> discount!</p>
            </div>
        </div>
    )
}

export default Content;