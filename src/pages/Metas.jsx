import ListadDeItem from "../components/MetaPages/listadDeItem/listadDeItem.jsx";
import MetaDoMes from "../components/MetaPages/MetaDoMes/MetaDoMes.jsx";


function Metas(){
    return(
        <div>
            <MetaDoMes/>
            <div className="header">
                <h1 className="titulo">Últimos Saldos</h1> 
                <a href="aa" className="vertudo">Ver Tudo {'>'}</a>
            </div>
            <ListadDeItem/>
        </div>
    )
}
export default Metas