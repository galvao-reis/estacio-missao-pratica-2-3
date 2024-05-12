import { ControleLivro } from "@/classes/controle/ControleLivros"
import { NextApiRequest, NextApiResponse } from "next"

export const controleLivro = new ControleLivro()

export default (req: NextApiRequest, res: NextApiResponse) => { 
    if (req.method === 'GET'){
        try{
            res.setHeader('Access-Control-Allow-Origin', '*')
            const livros = controleLivro.obterLivros()
            res.status(200).json(livros)
        }
        catch(error){
            res.status(500).send("Erro interno do servidor")
        }
    }
    else if (req.method ==='POST'){
        //add new book
        const info = req.body
        controleLivro.incluir(info)
        res.status(200).json({message: "Livro incluído com sucesso."})
    }
    else {
        res.status(405).send("Método não permitido")
    }
}