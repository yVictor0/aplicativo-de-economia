import ItemLista from '../ItemDaLista/ItemDaLista';
import './lista.module.css';

function ListadDeItem(){

    const gastos = [
        { id: 1, icone: "😁" ,texto: "Aparelho", preco: 70, tipo: "Pagamento", data: "hoje, 17:20"},
        { id: 2, icone: "🥊" ,texto: "Muay Thai", preco: 70, tipo: "Pagamento", data: "hoje, 14:32"},
        { id: 3, icone: "🚋" ,texto: "Passaagem", preco: 80, tipo: "Transporte", data: "hoje, 08:15"},
    ]
    

    return(
        <div className="lista-container">
            <ul className="lista-gastos">
                {gastos.map((item) => (
                    <ItemLista
                        key={item.id}
                        // cor={item.cor}
                        icone={item.icone}
                        texto={item.texto}
                        tipo={item.tipo}
                        preco={item.preco}
                        date={item.data}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ListadDeItem