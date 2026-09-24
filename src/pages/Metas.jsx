import ListadDeItem from "../components/MetaPages/listadDeItem/listadDeItem.jsx";
import MetaEValor from "../components/MetaPages/MetaEValor/MetaEValor.jsx";


function Metas(){
    return(
        <div>
            <MetaEValor/>
            <div className="header">
                <h1 className="titulo">Últimos Saldos</h1> 
                <a href="aa" className="vertudo">Ver Tudo {'>'}</a>
            </div>
            <ListadDeItem/>
        </div>
    )
}
export default Metas