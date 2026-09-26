import { useState } from 'react';
import ItemLista from '../ItemDaLista/ItemDaLista';
import ModalAdicionarTarefa from '../ModalAdicionarTarefa/ModalAdicionarTarefa';
import styles from './lista.module.css';

function ListadDeItem() {
  const [modalAberto, setModalAberto] = useState(false);

  const [gastos, setGastos] = useState([
    { id: 1, icone: "😁", texto: "Aparelho", preco: 70, tipo: "Pagamento", data: "hoje, 17:20" },
    { id: 2, icone: "🥊", texto: "Muay Thai", preco: 70, tipo: "Pagamento", data: "hoje, 14:32" },
    { id: 3, icone: "🚋", texto: "Passagem", preco: 80, tipo: "Transporte", data: "hoje, 08:15" },
  ]);

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