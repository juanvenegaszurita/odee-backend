import { NextApiRequest, NextApiResponse } from "next";


export default function index(req: NextApiRequest, res: NextApiResponse) {
  
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json( {name: "Metodo Get"} )
      break;
    case 'POST':
      res.status(200).json( {name: "Metodo Post"} )
      break;
    case 'PUT':
      res.status(200).json( {name: "Metodo Put"} )
      break;
    case 'DELETE': 
      res.status(200).json( {name: "Metodo Delete"} )
      break;   
    default:
      res.status(400).json( {name: "Metodo Invalido"} )
      break;
  }

}