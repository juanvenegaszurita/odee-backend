import { NextApiRequest, NextApiResponse } from "next";
import { Business } from "../../model/index.model";
import { DeleteBusinessProvider, GetBusinessOneProvider, UpdateBusinessProvider } from "../../provider/Business.provider";

export default async function index(req:NextApiRequest, res: NextApiResponse) {
  
  const { method } = req;
  const { id } : any = req.query;
  const { name, rut, users_id } : Business = req.body;

  switch (method) {
    case 'GET':
      const result = await GetBusinessOneProvider(parseInt(id));
      res.status(200).json(result)
      break;
    case 'PUT':
      const update = await UpdateBusinessProvider(parseInt(id), name, rut, users_id)
      res.status(200).json(update)
      break;
    case 'DELETE': 
      const deleteR = await DeleteBusinessProvider(parseInt(id))
      res.status(200).json(deleteR)
      break;   
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }
}