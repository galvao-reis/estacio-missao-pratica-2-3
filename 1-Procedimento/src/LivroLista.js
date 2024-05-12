import React from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";


const controleLivro = new ControleLivro()
const controleEditora = new ControleEditora()



const LinhaLivro = ({livro, excluir})=>{
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora)

    return (
    <tr>
        <td >
            {livro.titulo} <br/>
            <button type="button" className="btn btn-danger" onClick={ (e) =>{
                e.preventDefault()
                excluir(livro.codigo)
            }}> Excluir </button>
        </td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
            <ul>
                {livro.autores.map( (autor , index) => <li key={index}>{autor}</li>)}
            </ul>
        </td>
    </tr>
    )
}

const LivroLista = () =>{
    const [livros, setLivros] = React.useState(controleLivro.obterLivros())
    const [carregado, setCarregado] = React.useState(false)

    React.useEffect( () => {
        setLivros(controleLivro.obterLivros())
        setCarregado(true);
    }, [carregado])

    const excluirLivro = (codLivro) => {
        controleLivro.excluir(codLivro);
        setCarregado(false)
    }

    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"> Título </th>
                        <th scope="col"> Resumo </th>
                        <th scope="col"> Editora </th>
                        <th scope="col"> Autores </th>
                    </tr>
                </thead>
                <tbody className="table-striped">
                    {livros.map( (livro, index) => <LinhaLivro livro={livro} excluir={excluirLivro} key={index} /> )}
                </tbody>
            </table>
        </main>
    )
}

export default LivroLista