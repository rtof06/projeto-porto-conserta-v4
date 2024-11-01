import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

   if (req.method === "GET") {
      try {
         const response = await fetch(`${apiUrl}/oficinas`);
         const data = await response.json();
         res.status(200).json(data);
      } catch (err) {
         res.status(500).json({ message: 'Algo deu errado.', err })
      }
   } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Método ${req.method} não autorizado`)
   }
}
