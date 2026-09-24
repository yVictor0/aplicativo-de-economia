import styles from "./MetaEValor.module.css";

function MetaDoMes({ atual = 1400, maximo = 2000 }) {
  const porcentagem =
    maximo > 0 ? Math.min(Math.max((atual / maximo) * 100, 0), 100) : 0;

  return (
    <div className={styles.containerMetaEvalor}>
      <div>
        <h1>Saldo Atual</h1>
        <div className={styles.saldoAtual}>R${atual}</div>
        <p className={styles.subTitulo}>+{porcentagem}% da meta atigida </p>
      </div>

      <div className={styles.MetaContainer}>
        <div
          className={styles.MetaDoMes}
          style={{ "--porcentagem": `${porcentagem}%` }}
        >
          <div className={styles.icon}></div>
          <p className={styles.titleMetaDoMes}>Meta do Mês</p>
          <h1 className={styles.valor}>R$ {maximo}</h1>
          <h1 className={styles.porcentagem}>{porcentagem.toFixed(0)}%</h1>
        </div>
      </div>
    </div>
  );
}

export default MetaDoMes;