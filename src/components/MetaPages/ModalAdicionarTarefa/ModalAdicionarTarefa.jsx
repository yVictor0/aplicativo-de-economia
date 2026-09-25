import styles from './ModalAdicionarTarefa.module.css';

function ModalAdicionarTarefa({ onClose }) {
  const handleConfirmar = () => {
    alert("Item adicionado com sucesso!");
    onClose(); 
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <p>Teste</p>

        <button onClick={handleConfirmar}>
          Confirmar
        </button>
        <button onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default ModalAdicionarTarefa;