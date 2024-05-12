import {Livro} from "../modelo/Livro"

const livros:Array<Livro> = [
    {codigo: 123, codEditora:1, titulo:'Livro dos Numeros 1', resumo:'Um livro mostrando todos os numeros 1 do mundo',autores : ['O. Melhor', 'A. Maioral']},
    {codigo: 456, codEditora:2, titulo:'Os numeros pares', resumo:'Um compilado de números pares', autores : ['D. Ois', 'Dra. A. Mais', 'P. Ares']},
    {codigo: 789, codEditora:3, titulo:'Três nunca é demais', resumo:'Um livro de imagens mostrando objetos em grupos de três.', autores : ['T. Res', 'T. Riade']},
]

export class ControleLivro{

    obterLivros() : Array<Livro>{
        return livros;
    }

    incluir(livro:Livro) : void{
        const novoCodigo = Math.max(...(livros.map( livro => livro.codigo))) + 1

        livro.codigo = novoCodigo
        livros.push(livro)
    }

    excluir(codigo:number) : void{
        const index = livros.findIndex( livro => livro.codigo === codigo )
        if (index === -1) {
            return
        }
        livros.splice(index,1)
    }
}