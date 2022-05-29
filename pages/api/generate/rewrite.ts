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
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: tokens,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data.choices![0];
}
