import { useState } from 'react';
import ItemLista from '../ItemDaLista/ItemDaLista';
import ModalAdicionarTarefa from '../ModalAdicionarTarefa/ModalAdicionarTarefa';
import styles from './lista.module.css';

function ListadDeItem() {
  const [modalAberto, setModalAberto] = useState(false);

  const [gastos, setGastos] = useState([]);

  const handleGuardarItem = (novoGasto) => {
    setGastos((prevGastos) => [novoGasto, ...prevGastos]);
  };

  return (
    <section>
      <button 
        type="button"
        onClick={() => setModalAberto(true)}
        className={styles.adicionandoItem}
      >
        <div className={styles.IconAdd}>+</div>
        <div>
          <h1>Adicionar Novo Item</h1>
          <p>Registre um Novo Saldo</p>
        </div>
      </button>

      {modalAberto && (
        <ModalAdicionarTarefa 
          onClose={() => setModalAberto(false)} 
          onGuardar={handleGuardarItem}
        />
      )}

      <div className={styles['lista-container']}>
        <ul className={styles['lista-gastos']}>
          {gastos.map((item) => (
            <ItemLista
              key={item.id}
              icone={item.icone}
              texto={item.texto}
              tipo={item.tipo}
              preco={item.preco}
              date={item.data}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ListadDeItem;