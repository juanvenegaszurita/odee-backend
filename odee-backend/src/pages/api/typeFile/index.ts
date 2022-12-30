import { NextApiRequest, NextApiResponse } from "next";
import { TypeFile } from "../../model/index.model";
import { GetTypeFileAllProvider, InsertTypeFileProvider } from "../../provider/TypeFile.provider";

export default async function index(req: NextApiRequest, res: NextApiResponse) {  
  const { method } = req;
  const { name } : TypeFile = req.body;

  switch (method) {
    case 'GET':
      const select = await GetTypeFileAllProvider();
      res.status(200).json(select)
      break;
    case 'POST':
      const insert = await InsertTypeFileProvider(name);
      res.status(200).json(insert)
      break;
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }

}