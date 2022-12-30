import { NextApiRequest, NextApiResponse } from "next";
import { DeleteQuotesBusiness, GetQuotesBusiness, UpdateQuotesBusiness } from "../../business/Quotes.business";
import { TypeFile } from "../../model/index.model";

export default async function index(req:NextApiRequest, res: NextApiResponse) {
  
  const { method } = req;
  const { id } : any = req.query;
  const { file, quotes, itemsQuotes, type } : any = req.body;

  switch (method) {
    case 'GET':
      const result = await GetQuotesBusiness(parseInt(id), type);
      res.status(200).json(result)
      break;
    case 'PUT':
      const update = await UpdateQuotesBusiness(parseInt(id), file, quotes, itemsQuotes)
      res.status(200).json(update)
      break;
    case 'DELETE': 
      const deleteR = await DeleteQuotesBusiness(parseInt(id))
      res.status(200).json(deleteR)
      break;   
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }
}