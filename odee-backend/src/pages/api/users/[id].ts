import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../model/index.model";
import { DeleteUsersProvider, GetUsersOneProvider, UpdateUsersProvider } from "../../provider/Users.provider";

export default async function index(req:NextApiRequest, res: NextApiResponse) {
  
  const { method } = req;
  const { id } : any = req.query;
  const { name, clave, roles_id } : Users = req.body;

  switch (method) {
    case 'GET':
      const result = await GetUsersOneProvider(parseInt(id));
      res.status(200).json(result)
      break;
    case 'PUT':
      const update = await UpdateUsersProvider(parseInt(id) ,name, clave, roles_id)
      res.status(200).json(update)
      break;
    case 'DELETE': 
      const deleteR = await DeleteUsersProvider(parseInt(id))
      res.status(200).json(deleteR)
      break;   
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }
}