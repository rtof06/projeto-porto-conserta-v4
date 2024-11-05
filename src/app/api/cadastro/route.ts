import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (req.method === "PUT") {
    const { nome, sobrenome, email, telefone, password } = req.body;

    try {
      const response = await fetch(`${apiUrl}/clientes`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, sobrenome, email, telefone, password }),
      });

      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        const errorData = await response.json();
        res.status(response.status).json(errorData);
      }
    } catch (err) {
      res.status(500).json({ message: 'Algo deu errado.', err });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Método ${req.method} não autorizado`);
  }
}
