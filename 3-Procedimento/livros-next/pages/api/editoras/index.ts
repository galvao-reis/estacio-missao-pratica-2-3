import { ControleEditora } from "@/classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";


export const controleEditora:ControleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => { 

    if (req.method !== "GET"){
        res.status(405).send("Método não permitido")
    } 
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(controleEditora.getEditoras())
    }
    catch (error){
        res.status(500).send("Erro interno do servidor");
    }
//Keep an eye here
}