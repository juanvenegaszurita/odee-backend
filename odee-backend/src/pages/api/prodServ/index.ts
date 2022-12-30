import { NextApiRequest, NextApiResponse } from "next";
import { ProdServ } from "../../model/index.model";
import { GetProdServAllProvider, InsertProdServProvider } from "../../provider/ProdServ.provider";

export default async function index(req: NextApiRequest, res: NextApiResponse) {  
  const { method } = req;
  const { detail, price, type } : ProdServ = req.body;

  switch (method) {
    case 'GET':
      const select = await GetProdServAllProvider();
      res.status(200).json(select)
      break;
    case 'POST':
      const insert = await InsertProdServProvider(detail, price, type);
      res.status(200).json(insert)
      break;
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }

}