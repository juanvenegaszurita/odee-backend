import { NextApiRequest, NextApiResponse } from "next";
import { Business } from "../../model/index.model";
import { GetBusinessAllProvider, InsertBusinessProvider } from "../../provider/Business.provider";

export default async function index(req: NextApiRequest, res: NextApiResponse) {  
  const { method } = req;
  const { name, rut, users_id } : Business = req.body;

  switch (method) {
    case 'GET':
      const select = await GetBusinessAllProvider();
      res.status(200).json(select)
      break;
    case 'POST':
      const insert = await InsertBusinessProvider(name, rut, users_id);
      res.status(200).json(insert)
      break;
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }

}