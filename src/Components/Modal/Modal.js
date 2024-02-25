import './Modal.css';

const Modal = ( {setModalIsOpen, children} ) => {
    const closeModal = e => {
        if (e.target.classList.contains('overlay')) {
            setModalIsOpen(false)
        }
    }

    return (
        <div className="modal">
            <div className="overlay" onClick={closeModal}>
                { children }
            </div>
        </div>
    )
}

export default Modal;