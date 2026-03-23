# 🚀 RAG (Retrieval-Augmented Generation) — Complete A to Z Flow

This file explains the **full RAG pipeline** step-by-step with clean code and proper structure.

---

# 🧠 What is RAG?

RAG =
👉 Retrieve relevant data
👉 Augment it with user query
👉 Generate final answer using LLM

---

# 📊 🔥 RAG FLOW DIAGRAM

```
                ┌──────────────────────┐
                │      PDF / Data      │
                └─────────┬────────────┘
                          ↓
                ┌──────────────────────┐
                │     Extract Text     │
                └─────────┬────────────┘
                          ↓
                ┌──────────────────────┐
                │    Split into Chunks │
                └─────────┬────────────┘
                          ↓
                ┌──────────────────────┐
                │   Create Embeddings  │
                └─────────┬────────────┘
                          ↓
                ┌──────────────────────┐
                │   Store in Pinecone  │
                └─────────┬────────────┘
                          ↓
        ┌────────────────────────────────────┐
        │           USER QUERY               │
        └──────────────┬─────────────────────┘
                       ↓
                ┌──────────────────────┐
                │  Query Embedding     │
                └─────────┬────────────┘
                          ↓
                ┌──────────────────────┐
                │ Similarity Search    │
                └─────────┬────────────┘
                          ↓
                ┌──────────────────────┐
                │   Retrieve Context   │
                └─────────┬────────────┘
                          ↓
                ┌──────────────────────┐
                │   Send to LLM        │
                └─────────┬────────────┘
                          ↓
                ┌──────────────────────┐
                │   Final Answer       │
                └──────────────────────┘
```

---

# 📦 Tech Stack Used

* PDF Parsing → `pdf-parse`
* Chunking → `langchain/textsplitters`
* Embeddings → `MistralAIEmbeddings`
* Vector DB → `Pinecone`
* LLM → `ChatMistralAI`

---

# 🔥 Full Implementation

---

## 1️⃣ Setup & Imports

```js id="imp01"
import pdf from "pdf-parse";
import { readFile } from "node:fs/promises";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings, ChatMistralAI } from "@langchain/mistralai";
import { Pinecone } from "@pinecone-database/pinecone";
import "dotenv/config";
```

---

## 2️⃣ Initialize Pinecone

```js id="imp02"
const pc = new Pinecone({
  apiKey: process.env.RAG_TESTING,
});

const index = pc.index("cohort-2-testing");
```

---

## 3️⃣ Initialize Models

```js id="imp03"
// Embedding model
const embeddings = new MistralAIEmbeddings({
  apiKey: process.env.MISTRAL_API_KEY,
  model: "mistral-embed",
});

// LLM model
const model = new ChatMistralAI({
  model: "mistral-small-latest",
  temperature: 0,
});
```

---

# 📄 PHASE 1: DATA INGESTION

---

## 4️⃣ PDF → Text

```js id="step4"
const pdfBuffer = await readFile("./story.pdf");

const data = await pdf(pdfBuffer);
const text = data.text;

if (!text || text.trim().length === 0) {
  throw new Error("PDF text is empty ❌");
}
```

---

## 5️⃣ Text → Chunks

```js id="step5"
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 100,
});

const chunks = await splitter.splitText(text);
```

---

## 6️⃣ Chunks → Embeddings

```js id="step6"
const embeddedChunks = await embeddings.embedDocuments(chunks);
```

---

## 7️⃣ Store in Pinecone

```js id="step7"
const records = embeddedChunks.map((embedding, i) => ({
  id: `chunk-${i}`,
  values: embedding,
  metadata: {
    text: chunks[i],
  },
}));

await index.upsert({
  vectors: records,
});
```

---

# 🔍 PHASE 2: RETRIEVAL + GENERATION

---

## 8️⃣ User Query

```js id="step8"
const query = "How is the Arav internship?";
```

---

## 9️⃣ Query → Embedding

```js id="step9"
const queryEmbedding = await embeddings.embedQuery(query);
```

---

## 🔟 Similarity Search

```js id="step10"
const searchResult = await index.query({
  vector: queryEmbedding,
  topK: 3,
  includeMetadata: true,
});
```

---

## 1️⃣1️⃣ Extract Context

```js id="step11"
const context = searchResult.matches
  .map((match) => match.metadata.text)
  .join("\n");
```

---

## 1️⃣2️⃣ Create Prompt

```js id="step12"
const prompt = `
Answer the question based only on the context below.
If not found, say "I don't know".

Context:
${context}

Question:
${query}
`;
```

---

## 1️⃣3️⃣ Generate Answer

```js id="step13"
const response = await model.invoke(prompt);

console.log(response.content);
```

---

# 🧠 Final Flow (Short)

```
Data → Embedding → Storage → Retrieval → LLM → Answer
```

---

# ⚠️ Common Mistakes

* Passing wrong data types ❌
* Empty chunks ❌
* Using wrong embedding function ❌
* Not storing metadata ❌

---

# 🎯 Final Result

✅ You built a complete RAG system
✅ Backend + AI integration
✅ Production-level understanding

---

🔥 **Now you fully understand RAG end-to-end**
