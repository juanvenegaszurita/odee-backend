import { NextApiRequest, NextApiResponse } from "next";
import { Clients } from "../../model/index.model";
import { DeleteClientsProvider, GetClientsOneProvider, UpdateClientsProvider } from "../../provider/Clients.provider";

export default async function index(req:NextApiRequest, res: NextApiResponse) {
  
  const { method } = req;
  const { id } : any = req.query;
  const { name, rut, address, business_id } : Clients = req.body;

  switch (method) {
    case 'GET':
      const result = await GetClientsOneProvider(parseInt(id));
      res.status(200).json(result)
      break;
    case 'PUT':
      const update = await UpdateClientsProvider(parseInt(id), name, rut, address, business_id)
      res.status(200).json(update)
      break;
    case 'DELETE': 
      const deleteR = await DeleteClientsProvider(parseInt(id))
      res.status(200).json(deleteR)
      break;   
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }
}