import { useNavigate } from "react-router-dom"
import { ControleEditora } from "./controle/ControleEditora"
import { ControleLivro } from "./controle/ControleLivros"
import React from "react"

const controleLivro = new ControleLivro()
const controleEditora = new ControleEditora()


const LivroDados = () => {
    const navigate = useNavigate()
    const opcoes = controleEditora.getEditoras().map( editora => editora.codEditora)
    
    const [titulo,setTitulo] = React.useState("")
    const [resumo,setResumo] = React.useState("")
    const [autores,setAutores] = React.useState("")
    const [codEditora,setCodEditora] = React.useState(opcoes[0])

    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value))
    }

    const incluir = (evento) => {
        evento.preventDefault()
        const livro = {
            codigo : 0,
            codEditora,
            titulo,
            resumo,
            autores : autores.split('\n')
        };
        console.log(livro)
        controleLivro.incluir(livro);
        navigate('/');

        
    }
    return (
        <main>
            <h1>Dados do Livro</h1>
            <form onSubmit={ (evento) => incluir(evento)}>
                <div className="form-group">
                    <label className="form-label">Título*</label>
                    <input required className="form-control mb-2" type="text" id="titulo" value={titulo} onChange={(evento)=> setTitulo(evento.target.value)}></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Resumo</label>
                    <textarea className="form-control mb-2" id="resumo" value={resumo} onChange={ (evento) => setResumo(evento.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Editora*</label>
                    <select className="form-select form-control mb-4" onChange={ (evento) => {tratarCombo(evento)}}>
                        {opcoes.map( (cod) => {
                            return (<option  key={cod} value={cod}>{controleEditora.getNomeEditora(cod)}</option>)
                        } )}

                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Autores (1 por linha)*</label>
                    <textarea required className="form-control mb-2" value={autores} onChange={ (evento) => setAutores(evento.target.value)}></textarea>
                </div>
                <div>
                    <p>* Campo Obrigatório</p>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Salvar Dados</button>
                </div>

            </form>
        </main>
    )
}

export default LivroDados