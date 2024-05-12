import { controleEditora } from ".";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => { 

    if (req.method !== 'GET'){
        res.status(405).send("Método não permitido")
    }
    try{
        const codEditora:number = parseInt(req.query.codEditora as string)
        const nomeEditora:string = controleEditora.getNomeEditora(codEditora)
        const resposta = { nome: nomeEditora}
        res.status(200).json(resposta);
    }
    catch(error){
        res.status(500).send("Erro interno do servidor");
    }
}