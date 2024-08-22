function ClienteV2(props){
    return (<div Key={props.item.id}
    className="paciente">
        <div className="Quadrado"> <button className="botao">detalhes</button>
        {props.item.name} {props.item.city}</div>
        
    </div>)
    

}
export default ClienteV2