import './Modal.css'

const Modal = ({
    children, // contenu de la modal
    setIsOpen, // action
    isOpen, // état (ouvert/fermé)
    closingCross = true, // display cross
    editClose = 'X', // modifier le closing button
    fadeDuration = null, // durée de l'effet de fondu (en millisecondes)
    fadeDelay = null // ajoute un delay au fondu
}) => {
    // fermeture de la modal
    const handleClose = () => {
        setIsOpen(false);
    };
    // transition de fondu
    const transitionStyle = {
        transition: `opacity ${fadeDuration}ms ease-in-out ${fadeDelay}ms`,
        opacity: isOpen ? 1 : 0
    };


    return (
        <div>
            <div className={isOpen ? "shadow-modal" : ""} onClick={()=> setIsOpen(false)}></div>
            <div className={`modal`} style={transitionStyle}>
                <div className='inModal'>
                    {closingCross && <span className="modal-close" onClick={handleClose}>{editClose}</span>}
                    {children}
                </div>
            </div>
        </div>
        
        
    )
}

export default Modal