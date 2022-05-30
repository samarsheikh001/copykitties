import { NextApiRequest, NextApiResponse } from "next";
import openai from "../../../lib/openaiSetup";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { text } = req.body;
    try {
      const data = await rewrite(text);
      res.status(200).json(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

async function rewrite(tokens: string) {
  console.log(tokens);
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: `Rephrase the given text:\n\n${tokens}`,
    temperature: 0,
    max_tokens: 300,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.data);
  return response.data.choices![0];
}
