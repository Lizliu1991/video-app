// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//file type ts for exporting and importing
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import { allPostsQuery } from '../../../utils/queries'

//build api endpoints

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET'){
    const query = allPostsQuery()
    const data = await client.fetch(query);
    res.status(200).json(data)
  } else if (req.method === 'POST') {
    const document=req.body
    console.log(document);
    
    client.create(document)
    //201 means created
    .then(() => res.status(201).json("Video Created"))
  }
}

