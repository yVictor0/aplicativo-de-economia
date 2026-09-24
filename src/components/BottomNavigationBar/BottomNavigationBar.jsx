import styles from './bottomNavigationBar.module.css'
import btnInicioIcon from '../../assets/btn/btnInicio.svg';
// import btnRelatorioIcon from '../../assets/btn/btnRelatorio.svg';
import btnMetasIcon from '../../assets/btn/btnMetas.svg';
// import btnInvestimentosIcon from '../../assets/btn/btnInvestimentos.svg';
import btnPerfilIcon from '../../assets/btn/btnPerfil.svg';

function BottomNavigationBar(){
    return(
       <div className={styles.NavBottom}>
          <button className={styles.btnInicio}>
            <img src={btnInicioIcon}/>
          </button>

          {/* <button className={styles.btnRelatorio}>
            <img src={btnRelatorioIcon}/>
          </button> */}

          <button className={styles.btnMetas}>
            <img src={btnMetasIcon}/>
          </button>

          {/* <button className={styles.btnInvestimentos}>
            <img src={btnInvestimentosIcon}/>
          </button> */}

          <button className={styles.btnPerfil}>
            <img src={btnPerfilIcon}/>
          </button>
       </div>
    )
}

export default BottomNavigationBar