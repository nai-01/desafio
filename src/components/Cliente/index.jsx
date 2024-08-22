function Cliente(props){
    console.log(props.item)
    return(<div key={props.item.id}
        className="clientes">
            <div className="bolinha">{props.item.id}</div> {props.item.name} {props.item.city}</div>)
}
export default Cliente