import styles from './ModalAdicionarTarefa.module.css';

function ModalAdicionarTarefa({ onClose }) {
  const handleConfirmar = () => {
    alert("Item adicionado com sucesso!");
    onClose(); 
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <p>Novo Item</p>

        <button onClick={handleConfirmar}>
          Salvar
        </button>
        <button onClick={onClose}>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ModalAdicionarTarefa;
