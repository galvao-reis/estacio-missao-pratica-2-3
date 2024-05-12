import {Editora} from "../modelo/Editora"

const editoras:Array<Editora> = [
    {codEditora:1, nome:'Editora Um'},
    {codEditora:2, nome:'Editora Dois'},
    {codEditora:3, nome:'Editora Três'}

];

export class ControleEditora{
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora:number): string {
        const editorasFiltradas = editoras.filter((editora)=> editora.codEditora === codEditora) 
        return editorasFiltradas[0] ? editorasFiltradas[0].nome : ''
    }
}