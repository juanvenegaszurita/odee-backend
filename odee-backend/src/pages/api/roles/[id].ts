import { NextApiRequest, NextApiResponse } from "next";
import { DeleteRolesProvider, GetRolesOneProvider, UpdateRolesProvider } from "../../provider/Roles.provider";


export default async function index(req:NextApiRequest, res: NextApiResponse) {
  
  const { method } = req;
  const { id } : any = req.query;
  const { description } : any = req.body;

  switch (method) {
    case 'GET':
      const result = await GetRolesOneProvider(parseInt(id));
      res.status(200).json(result)
      break;
    case 'PUT':
      const update = await UpdateRolesProvider(parseInt(id), description)
      res.status(200).json(update)
      break;
    case 'DELETE': 
      const deleteR = await DeleteRolesProvider(parseInt(id));
      res.status(200).json(deleteR)
      break;   
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }
}