import './Modal.css';

const Content = ( {setModalIsOpen} ) => {
    return(
        <div className="modal_content">
            <p className="modal-text">Pick up your order and get a <span className="price">30%</span> discount!</p>
            <button className="close-modal" onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
    )
}

export default Content;