import { NextApiRequest, NextApiResponse } from "next";
import { ProdServ } from "../../model/index.model";
import { DeleteProdServProvider, GetProdServOneProvider, UpdateProdServProvider } from "../../provider/ProdServ.provider";

export default async function index(req:NextApiRequest, res: NextApiResponse) {
  
  const { method } = req;
  const { id } : any = req.query;
  const { detail, price, type } : ProdServ = req.body;

  switch (method) {
    case 'GET':
      const result = await GetProdServOneProvider(parseInt(id));
      res.status(200).json(result)
      break;
    case 'PUT':
      const update = await UpdateProdServProvider(parseInt(id), detail, price, type)
      res.status(200).json(update)
      break;
    case 'DELETE': 
      const deleteR = await DeleteProdServProvider(parseInt(id))
      res.status(200).json(deleteR)
      break;   
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }
}