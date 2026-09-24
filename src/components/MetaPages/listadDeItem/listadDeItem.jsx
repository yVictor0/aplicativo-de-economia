import ItemLista from '../ItemDaLista/ItemDaLista';
import styles from './lista.module.css'; // 1. Importa como 'styles'

function ListadDeItem() {
  const gastos = [
    { id: 1, icone: "😁", texto: "Aparelho", preco: 70, tipo: "Pagamento", data: "hoje, 17:20" },
    { id: 2, icone: "🥊", texto: "Muay Thai", preco: 70, tipo: "Pagamento", data: "hoje, 14:32" },
    { id: 3, icone: "🚋", texto: "Passagem", preco: 80, tipo: "Transporte", data: "hoje, 08:15" },
  ];

  return (
    <div>
      {/* 2. Usa a variável 'styles' nas classNames */}
      <div className={styles.adicionandoItem}>
        <div className={styles.IconAdd}>+</div>
        <h1>Adicionar Novo Item</h1>
        <p>Registre um Novo Saldo</p>
      </div>

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
    </div>
  );
}

export default ListadDeItem;