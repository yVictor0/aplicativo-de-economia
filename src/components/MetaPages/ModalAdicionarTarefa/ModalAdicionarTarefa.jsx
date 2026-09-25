import styles from './ModalAdicionarTarefa.module.css';
import { useState } from 'react';

function ModalAdicionarTarefa({ onClose, valorMaximo = 100000000000 }) {
  const handleConfirmar = () => {
    alert("Item adicionado com sucesso!");
    onClose(); 
  };
  const [valor, setValor] = useState('0,00')

  const mudandoValor = (mdv) => {
    const numeroVariavel = mdv.target.value.replace(/\D/g,'')

    if(!numeroVariavel){
      setValor('0,00')
      return
    }

      const numero = Number(numeroVariavel) / 100

      if(numero > valorMaximo){
        return
      }

      const valorFormatado = numero.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
      })

      setValor(valorFormatado)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <input type="text" placeholder='item'/>
        <input type="text" value={`R$ ${valor}`} placeholder='R$ 0,00' onChange={mudandoValor}/>
          <button className={styles.btnEntrada}>Entrada</button>
          <button className={styles.btnRetirada}>Retirada</button>
        <button className={styles.btnConfirmar} onClick={handleConfirmar}>
          Confirmar
        </button>
        <button className={styles.btnFechar} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default ModalAdicionarTarefa;