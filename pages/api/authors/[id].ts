import { authors } from '@/app/assets/data/authors'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(authors.find(a => a._id == req.query.id))
}
