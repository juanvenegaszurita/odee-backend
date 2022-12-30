import { NextApiRequest, NextApiResponse } from "next";
import { Clients } from "../../model/index.model";
import { GetClientsAllProvider, InsertClientsProvider } from "../../provider/Clients.provider";

export default async function index(req: NextApiRequest, res: NextApiResponse) {  
  const { method } = req;
  const { name, rut, address, business_id } : Clients = req.body;

  switch (method) {
    case 'GET':
      const select = await GetClientsAllProvider();
      res.status(200).json(select)
      break;
    case 'POST':
      const insert = await InsertClientsProvider(name, rut, address, business_id);
      res.status(200).json(insert)
      break;
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }

}