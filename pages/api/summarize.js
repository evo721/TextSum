// pages/api/summarize.js

import { OpenAI } from "langchain/llms/openai";
import { loadSummarizationChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

async function summarizeChunk(model, text) {
  const chain = loadSummarizationChain(model);
  const response = await chain.call({
    input_documents: [text],
  });
  return response.text;
}

async function summarizeText(model, text, chunkSize = 2000) {
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize });
  const docs = await textSplitter.createDocuments([text]);

  const summaries = await Promise.all(docs.map((doc) => summarizeChunk(model, doc)));
  return summaries.join(' ');
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const text = req.body.text;

      if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
      }

      const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0 });
      const summary = await summarizeText(model, text);

      res.status(200).json({ summary });
    } catch (error) {
      console.error("Error in API route:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Invalid request method" });
  }
}
