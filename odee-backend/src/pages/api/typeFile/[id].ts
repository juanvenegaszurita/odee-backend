import { NextApiRequest, NextApiResponse } from "next";
import { TypeFile } from "../../model/index.model";
import { DeleteTypeFileProvider, GetTypeFileOneProvider, UpdateTypeFileProvider } from "../../provider/TypeFile.provider";

export default async function index(req:NextApiRequest, res: NextApiResponse) {
  
  const { method } = req;
  const { id } : any = req.query;
  const { name } : TypeFile = req.body;

  switch (method) {
    case 'GET':
      const result = await GetTypeFileOneProvider(parseInt(id));
      res.status(200).json(result)
      break;
    case 'PUT':
      const update = await UpdateTypeFileProvider(parseInt(id), name)
      res.status(200).json(update)
      break;
    case 'DELETE': 
      const deleteR = await DeleteTypeFileProvider(parseInt(id))
      res.status(200).json(deleteR)
      break;   
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }
}