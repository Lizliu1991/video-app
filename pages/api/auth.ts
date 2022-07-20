// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//file type ts for exporting and importing
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client'


//build api endpoints

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'POST'){
    const user = req.body
    //call client in sanity, create a  new user in sanity database
    client.createIfNotExists(user)
    .then(() => res.status(200).json('Login Success'))
  
  }
}

