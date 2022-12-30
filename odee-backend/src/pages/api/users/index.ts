import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../model/index.model";
import { GetUsersAllProvider, InsertUsersProvider } from "../../provider/Users.provider";

export default async function index(req: NextApiRequest, res: NextApiResponse) {  
  const { method } = req;
  const { name, clave, roles_id } : Users = req.body;

  switch (method) {
    case 'GET':
      const select = await GetUsersAllProvider();
      res.status(200).json(select)
      break;
    case 'POST':
      const insert = await InsertUsersProvider(name, clave, roles_id);
      res.status(200).json(insert)
      break;
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }

}