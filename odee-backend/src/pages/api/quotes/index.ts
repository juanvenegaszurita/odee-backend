import { NextApiRequest, NextApiResponse } from "next";
import { GenerateQuotesBusiness } from "../../business/Quotes.business";

export default async function index(req: NextApiRequest, res: NextApiResponse) {  
  const { method } = req;
  const { file, itemsQuotes, quotes } : any = req.body;
  
  switch (method) {
    case 'GET':
      /* const select = await GetTypeFileAllProvider(); */
      res.status(200)
      break;
    case 'POST':
      const insert = await GenerateQuotesBusiness(file, quotes, itemsQuotes);
      res.status(200).json(insert)
      break;
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }

}