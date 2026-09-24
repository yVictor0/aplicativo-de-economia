import styles from "./MetaDoMes.module.css";



function MetaDoMes({atual = 1400, maximo = 2000}) {

    const porcentagem = maximo > 0 
    ? Math.min(Math.max((atual / maximo ) * 100, 0), 100) 
    : 0

    
    return (
        <div>
            <div className={styles.MetaDoMes}>
                <div className={styles.icon}></div>
                <p className={styles.titleMetaDoMes}> Meta Do Mes {maximo} </p>
                <h1 className={styles.valor} >{maximo}</h1>
                <h1 className={styles.porcentagem}> {porcentagem.toFixed(0)}% </h1>

            </div>
        </div>
    );
}

export default MetaDoMes;