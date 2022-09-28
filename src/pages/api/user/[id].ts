import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from 'next/router';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const router = useRouter()
  const { id } = router.query
  return res.json(id)
};
