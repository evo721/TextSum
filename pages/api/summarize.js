// pages/api/summarize.js

import { OpenAI } from "langchain/llms/openai";
import { loadSummarizationChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const text = req.body.text;
      const model = new OpenAI({openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0});
      const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
      const docs = await textSplitter.createDocuments([text]);

      const chain = loadSummarizationChain(model);
      const response = await chain.call({
        input_documents: docs,
      });

      res.status(200).json({ summary: response.text });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Invalid request method" });
  }
}
