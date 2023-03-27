import './Modal.css'

const Modal = ({
    children, // contenu de la modal
    setIsOpen, // action
    isOpen, // état (ouvert/fermé)
    closingCross = true, // display cross
    closeText = 'X' // text du closing button
}) => {
    // fermeture de la modal
    const handleClose = () => {
        setIsOpen(false);
    };

    if(!isOpen) return null
    return (
        <div className="modal-container">
            <div className="shadow" onClick={()=> setIsOpen(false)}></div>
            <div className="modal">
                <div className='inModal'>
                    {closingCross && <span className="modal-close" onClick={handleClose}>{closeText}</span>}
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Modal