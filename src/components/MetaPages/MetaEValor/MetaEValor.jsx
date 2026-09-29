import { useState } from 'react';
import styles from "./MetaEValor.module.css";

function MetaDoMes() {
  const meta = 2000;

  const [atual, setAtual] = useState(0);

  const nvValor = (e) => {
    const apenasNumeros = e.target.value.replace(/\D/g, '');
  
    if (!apenasNumeros) {
      setAtual(0);
      return;
    }
   
    const valorDecimal = parseFloat(apenasNumeros) / 100;
    setAtual(valorDecimal);
  };

  const valorFormatado = atual.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const porcentagem = (atual / meta) * 100;

  return (
    <div className={styles.containerMetaEvalor}>
      <div>
        <h1>Saldo Atual</h1>
        <div className={styles.saldoAtual}>
          R${' '}
          <input
            type="text"
            inputMode="numeric"
            value={valorFormatado}
            onChange={nvValor}
          />
        </div>
        <p className={styles.subTitulo}>
          +{porcentagem.toFixed(1)}% da meta atingida
        </p>
      </div>

      <div className={styles.MetaContainer}>
        <div
          className={styles.MetaDoMes}
          style={{ "--porcentagem": `${porcentagem}%` }}
        >
          <div className={styles.icon}></div>
          <p className={styles.titleMetaDoMes}>Meta do Mês</p>
          <h1 className={styles.valor}>R$ {meta.toFixed(2)}</h1>
          <h1 className={styles.porcentagem}>{porcentagem.toFixed(0)}%</h1>
        </div>
      </div>
    </div>
  );
}

export default MetaDoMes;