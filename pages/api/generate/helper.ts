import { NextApiRequest, NextApiResponse } from 'next';
import openai from '../../../lib/openaiSetup';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { title, description, tone, keywords, toGenerate } = req.body;
    try {
      console.log(
        `${title}\n${description}}\nkeywords: ${keywords}\nGenerate ${toGenerate}.`,
      );

      const response = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: `${title}\n${description}}\nkeywords: ${keywords}\nGenerate ${toGenerate}.`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response.data.choices);
      res.status(200).json(response.data.choices);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
