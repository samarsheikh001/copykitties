import { NextApiRequest, NextApiResponse } from "next";
import openai from "../../../lib/openaiSetup";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const description: string = req.body.description;
    const brandName: string = req.body.brandName;
    const toPredict: string = req.body.toPredict;
    try {
      const result = await generator(description, brandName, toPredict);
      res.status(200).json(result);
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

async function generator(
  description: string,
  brandName: string,
  toPredict: string
) {
  console.log(
    `generate '${toPredict}' for following brand description named ${brandName}:\n${description}.`
  );

  const response = await openai.createCompletion("text-davinci-002", {
    prompt: `generate ${toPredict} for following brand description named ${brandName}:\n${description}.`,
    temperature: 0.7,
    max_tokens: 120,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    n: 5,
  });
  console.log(response.data.choices);

  return response.data.choices;
}
