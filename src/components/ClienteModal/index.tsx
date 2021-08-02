import Modal from 'react-modal';
import styles from './clienteModal.module.scss';


interface TransacionClienteModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ClienteModal({isOpen, onRequestClose} : TransacionClienteModalProps ){
    return(
        
     <Modal 
     isOpen={isOpen}
     onRequestClose={onRequestClose}
     overlayClassName="react-modal-overlay"
     className="react-modal-content"
     >
        <div className={styles.container}>
        <h1>Visualizar Cliente</h1>   
      
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="responsavel" />

        <button type="submit">Cadastrar</button>

        </div>
     </Modal>
    )
}