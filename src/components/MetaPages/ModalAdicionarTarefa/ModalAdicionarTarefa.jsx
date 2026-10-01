import styles from './ModalAdicionarTarefa.module.css';
import { useState } from 'react';

function ModalAdicionarTarefa({ onClose, valorMaximo = 100000000000, onGuardar }) {
  const [valor, setValor] = useState('0,00');
  const [nomeDoItem, setNomeDoItem] = useState('');
  const [tipo, setTipo] = useState('');
  const [icone, setIcone] = useState('')

  const mudandoValor = (mdv) => {
    const numeroVariavel = mdv.target.value.replace(/\D/g, '');

    if (!numeroVariavel) {
      setValor('0,00');
      return;
    }

    const numero = Number(numeroVariavel) / 100;

    if (numero > valorMaximo) {
      return;
    }

    const valorFormatado = numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setValor(valorFormatado);
  };

  const handleConfirmar = (e) => {
    e.preventDefault();

    if (!nomeDoItem.trim()) {
      alert("Por favor, digite o nome do item!");
      return;
    }

    if (valor === '0,00' || !valor) {
      alert("Por favor, digite um valor válido!");
      return;
    }

   

    // const alterandoSinal = () => {
    //   setTipo((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev))
    // }

    const agora = new Date();
    const horaAtual = `hoje, ${agora.getHours().toString().padStart(2, '0')}:${agora.getMinutes().toString().padStart(2, '0')}`;

    const novoItem = {
      id: Date.now(),
      icone: icone.trim() || (tipo === 'Entrada' ? '💰' : '💸'),
      texto: nomeDoItem,
      preco: valor,
      tipo: tipo || 'Entrada',
      data: horaAtual,
    };


    onGuardar(novoItem);
    

    setNomeDoItem('');
    setValor('0,00');
    onClose();
  };

  
   
   
    const tipoPositivo =() => {
      setValor((prev) => (prev.startsWith('-') ? prev.slice(1) :  prev))
    }

    const tipoNegativo =() => {
      setValor((prev) => (prev.startsWith('-') ? prev : '-' + prev))
    }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleConfirmar}>
          <input 
              type="text" 
              value={icone} 
              onChange={(e) => setIcone(e.target.value)} 
              style={{ width: '50px', textAlign: 'center', fontSize: '18px' }}
              maxLength={2}
            />
          <input 
            type="text" 
            value={nomeDoItem} 
            placeholder='Nome do item' 
            onChange={(evento) => setNomeDoItem(evento.target.value)} 
          />
          <input 
            type="text" 
            value={valor} 
            placeholder='R$ 0,00' 
            onChange={mudandoValor}
          />
          
          <div className={styles.botoesTipo}>
            <button 
              type="button" 
              className={`${styles.btnEntrada} ${tipo === 'Entrada' ? styles.ativo : ''}`}
              onClick={tipoPositivo}
            >
              Entrada
            </button>
            <button 
              type="button" 
              className={`${styles.btnRetirada} ${tipo === 'Retirada' ? styles.ativo : ''}`}
              onClick={tipoNegativo }
            >
              Retirada
            </button>
          </div>

          <button type="submit" className={styles.btnConfirmar}>
            Confirmar
          </button>
          <button type="button" className={styles.btnFechar} onClick={onClose}>
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalAdicionarTarefa;