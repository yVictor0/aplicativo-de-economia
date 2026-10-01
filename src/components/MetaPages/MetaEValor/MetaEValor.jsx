import { useState, useEffect } from 'react';
import styles from "./MetaEValor.module.css";

function MetaDoMes() {
  const [saldoAtual, setSaldoAtual] = useState(() => {
    const salvo = localStorage.getItem('@metaDoMes:saldoAtual');
    return salvo !== null ? Number(salvo) : 0;
  });

  const [valorMeta, setValorMeta] = useState(() => {
    const salvo = localStorage.getItem('@metaDoMes:valorMeta');
    return salvo !== null ? Number(salvo) : 1500;
  });

  useEffect(() => {
    localStorage.setItem('@metaDoMes:saldoAtual', saldoAtual.toString());
  }, [saldoAtual]);

  useEffect(() => {
    localStorage.setItem('@metaDoMes:valorMeta', valorMeta.toString());
  }, [valorMeta]);

  const VALOR_MAXIMO_PERMITIDO = 100000000; 

  const converterParaNumero = (textoEntrada) => {
    const apenasNumeros = textoEntrada.replace(/\D/g, '');
    if (!apenasNumeros) return 0;

    const valorCalculado = Number(apenasNumeros) / 100;
    return Math.min(valorCalculado, VALOR_MAXIMO_PERMITIDO);
  };

  const handleSaldoChange = (evento) => {
    setSaldoAtual(converterParaNumero(evento.target.value));
  };

  const handleMetaChange = (evento) => {
    setValorMeta(converterParaNumero(evento.target.value));
  };

  const formatarMoeda = (valorNumerico) =>
    valorNumerico.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const porcentagemCalculada = valorMeta > 0 ? (saldoAtual / valorMeta) * 100 : 0;
  const porcentagemProgresso = Math.min(porcentagemCalculada, 100);

  return (
    <div className={styles.containerMetaEvalor}>
      <div>
        <h1>Saldo Atual</h1>
        <div className={styles.saldoAtual}>
          R${' '}
          <input
            className={styles.saldo}
            type="text"
            inputMode="numeric"
            value={formatarMoeda(saldoAtual)}
            onChange={handleSaldoChange}
          />
        </div>
        <p className={styles.subTitulo}>
          +{porcentagemProgresso.toFixed(1)}% da meta atingida
        </p>
      </div>

      <div className={styles.MetaContainer}>
        <div
          className={styles.MetaDoMes}
          style={{ "--porcentagem": `${porcentagemProgresso}%` }}
        >
          <div className={styles.icon}></div>
          <p className={styles.titleMetaDoMes}>Meta do Mês</p>
          <input
            className={styles.inputPorcentagem}
            type="text"
            inputMode="numeric"
            value={formatarMoeda(valorMeta)}
            onChange={handleMetaChange}
          />
          <h1 className={styles.porcentagem}>{porcentagemProgresso.toFixed(0)}%</h1>
        </div>
      </div>
    </div>
  );
}

export default MetaDoMes;