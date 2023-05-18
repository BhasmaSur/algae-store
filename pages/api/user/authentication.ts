// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

const KEY = 'algaestore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }
  const { username } = req.body;
  res.json({
    token: jwt.sign(
      {
        username: username,
        admin: false,
      },
      KEY
    ),
  });
}
