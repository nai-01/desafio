import "./style.css"
function Desafio18 (){
    const botoes=["um botão","um botão","um botão","um botão","um botão","um botão",]
    return (<div id="desafio18">
        {botoes.map((item)=>{
            return <button key={item}>
                {item}
            </button>
        })}

    </div>

    )
}
export default Desafio18