import btnBell from '../../assets/btn/btnBell.svg';
import styles from './Header.module.css'


const user = "Yan 👋"
function Header(){
    return(
        <div className={styles.Header}>
            <h1>Olá,<strong>{user}</strong> </h1>
            <p></p>
            <button className={styles.bntNotificaçao}>
                <img src={btnBell} width={30}/>
            </button>
        </div>
    )
}
export default Header
