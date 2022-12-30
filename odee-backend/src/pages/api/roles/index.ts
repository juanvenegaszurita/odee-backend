import { NextApiRequest, NextApiResponse } from "next";
import { GetRolesAllProvider, InsertRolesProvider } from "../../provider/Roles.provider";


export default async function index(req: NextApiRequest, res: NextApiResponse) {  
  const { method } = req;
  
  switch (method) {
    case 'GET':
      const select = await GetRolesAllProvider()
      res.status(200).json(select)
      break;
    case 'POST':
      const { description }: any = req.body;
      const insert = await InsertRolesProvider(description)
      res.status(200).json(insert)
      break;
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }

}