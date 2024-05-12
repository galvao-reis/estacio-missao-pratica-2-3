import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "DELETE"){
        res.status(405).send("Método não permitido")
    }
    if (req.method === "DELETE"){
        try{
            const codLivro:number = Number(req.query.codigo as string)
            controleLivro.excluir(codLivro)
            res.status(200).json({message: "Livro excluído com sucesso."})


        }
        catch(error){
            res.status(500).send("Erro interno do servidor")
        }
    }
}
