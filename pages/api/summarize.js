import { OpenAI } from "langchain/llms/openai";
import { loadSummarizationChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms));

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const text = req.body.text;
      console.log("Received text:", text); // Debugging statement
      
      const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0 });
      const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1200 });
      const docs = await textSplitter.createDocuments([text]);

      const chain = loadSummarizationChain(model);
      const response = await Promise.race([
        chain.call({ input_documents: docs }),
        timeout(25000) // Adjust the timeout value as needed (in milliseconds)
      ]);

      console.log("Response data:", response); // Debugging statement
      res.status(200).json({ summary: response.text });
    } catch (error) {
      console.error("Error:", error); // Debugging statement
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Invalid request method" });
  }
}
