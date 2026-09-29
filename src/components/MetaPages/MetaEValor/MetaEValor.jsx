import { useState } from 'react';
import styles from "./MetaEValor.module.css";

function MetaDoMes() {
  const meta = 2000;

  // Guarda o valor numérico puro (ex: 1 = R$ 1,00 ou 0.01 dependendo do formato)
  const [atual, setAtual] = useState(0);

  const nvValor = (e) => {
    // 1. Remove tudo que NÃO for número
    const apenasNumeros = e.target.value.replace(/\D/g, '');

    // Se apagar tudo, reseta para 0
    if (!apenasNumeros) {
      setAtual(0);
      return;
    }

    // 2. Transforma a sequência de dígitos em valor decimal dividindo por 100
    // Ex: "1" vira 0.01 | "10" vira 0.10 | "100" vira 1.00
    const valorDecimal = parseFloat(apenasNumeros) / 100;
    setAtual(valorDecimal);
  };

  // Formata o número numérico para a string da moeda (ex: 1.5 -> "1,50")
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