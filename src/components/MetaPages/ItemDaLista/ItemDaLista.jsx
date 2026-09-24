import styles from './ItemLista.module.css';

function ItemDaLista({ texto, preco, tipo, date, icone }) {
  return (
    <li className={styles.itemLista}>
      <div className={styles.iconFundo}>
        <span className={styles.iconEmoji}>{icone}</span>
      </div>
      <div className={styles.esquerda}>
        <span className={styles.texto}>{texto}</span>
        <span className={styles.texto}>{tipo}</span>
      </div>
      <div className={styles.direita}>
        <span className={styles.preco}>R$ {preco}</span>
        <span className={styles.texto}>{date}</span>
      </div>
    </li>
  );
}

export default ItemDaLista;