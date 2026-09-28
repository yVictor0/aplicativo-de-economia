import { useState } from 'react';

import styles from "./MetaEValor.module.css";


function MetaDoMes({ maximo = 2000 }) {
  const [atual, setatual] = useState(5)
  const [tempAtual, setTempAtual] = useState(5)
  const [alterando, setAlterando] = useState(false)


  const nvValor = () => {
    setatual(tempAtual)
    setAlterando(false)
  }

  if (alterando) {
    return (<input
     type='number'
     value={tempAtual} 
     onChange={(e) => setTempAtual(e.target.value)}
     onBlur={nvValor}
     onKeyDown={(e) => e.key === 'Enter' && nvValor()}
     autoFocus
     />
    )
  }

  const porcentagem =
    maximo > 0 ? Math.min(Math.max((atual / maximo) * 100, 0), 100) : 0;

  return (
    <div className={styles.containerMetaEvalor}>
      <div>
        <h1>Saldo Atual</h1>
        <div className={styles.saldoAtual}  onClick={() => setAlterando} >R$ <span contentEditable
      suppressContentEditableWarning> {atual} </span></div>
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