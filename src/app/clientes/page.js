import Cliente from "@/components/Cliente"
import ClienteV2 from "@/components/ClienteV2"
async function ListaClientes() {
    const resposta = await fetch("https://tkb6nl2m-8082.brs.devtunnels.ms")
    const json = await resposta.json()

    return (<div id="listaClientes">
        <div id="titulo">Clientes</div>
        {json.clients.sort((cliente1, cliente2) => cliente1.id > cliente2.id? 1 : -1)
            .map(item=><ClienteV2 item={item}/>
                
            )}

    </div>)
}
export default ListaClientes