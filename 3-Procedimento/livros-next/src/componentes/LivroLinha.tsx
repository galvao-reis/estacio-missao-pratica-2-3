import { ControleEditora } from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";
import React from "react";

const controleEditora:ControleEditora = new ControleEditora()

interface LinhaLivroProps {
    livro:Livro, 
    excluir: (newValue:number) => void

}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({livro, excluir}) => { 
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


