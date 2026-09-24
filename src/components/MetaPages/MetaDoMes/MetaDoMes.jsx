import styles from "./MetaDoMes.module.css";

const valor = "1.500,00"; 

function MetaDoMes({atual = 60, maximo = 1500}) {

    const porcentagem = maximo > 0 
    ? Math.min(Math.max((atual / maximo ) * 100, 0), 100) 
    : 0

    
    return (
        <div>
            <div className={styles.MetaDoMes}>
                <div className={styles.icon}></div>
                <p className={styles.titleMetaDoMes}> Meta Do Mes </p>
                <h1 className={styles.valor} >{valor}</h1>
                <h1 className={styles.porcentagem}> {porcentagem.toFixed(0)}% </h1>

            </div>
        </div>
    );
}

export default MetaDoMes;