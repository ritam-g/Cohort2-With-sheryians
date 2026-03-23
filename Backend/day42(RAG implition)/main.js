// RAG process will be step by step

import { PDFParse } from 'pdf-parse'
import { readFile } from 'node:fs/promises'
//! for spllting the text  
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
// ! for embadding
import { MistralAIEmbeddings } from "@langchain/mistralai";
import "dotenv/config";
// ! for vector store
import { Pinecone } from '@pinecone-database/pinecone';
import { json } from 'node:stream/consumers';

const pc = new Pinecone({
    apiKey: process.env.RAG_TESTING,
});
// the indes parameters will be the name of the index in pinecone
const index = pc.index('cohort-2-testing');
//! steps 
// 1. pdf to text 
// 2. text to chunks 
// 3. chunks to summary
// 4. summary to answer

// 1. pdf to text

/**========================================================================
 * !                              1. Collect Data  
                     Gather documents (PDFs, text files, websites, etc.)
 *   
 *   
 *   
 *
 *========================================================================**/
const pdfBuffer = await readFile("./story.pdf")

const parser = new PDFParse({
    // it takes buffer so we need to pass buffer
    data: pdfBuffer
})

const data = await parser.getText()
console.log(data)


// 2. text to chunks
// first we have to make instnce of text splitter
// then we can split the text

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 0
})

//! now we can split the text
const chunks = await splitter.splitText(data.text)

console.log(chunks, chunks.length)


// now we made the chunks now we can make embadding model

// we have model who will create the embadding this stuff 

// we now for using model we need to make instance of model

const embeddings = new MistralAIEmbeddings({
    apiKey: process.env.MISTRAL_API_KEY,
    model: "mistral-embed"
});
// check before embedding
if (!chunks || chunks.length === 0) {
    throw new Error("No chunks found. Check PDF parsing.");
}

// we are emadding and with taht we are ding the thing of embadding with every chunk bucuse of that we need to make array of object
// now we can make array of object
// const docs = await Promise.all(chunks.map(async (chunk) => {
//     const embedding = await embeddings.embedQuery(chunk)
//     return {
//         text: chunk,
//         embedding
//     }
// }))
// !the ressong of doing this first of all recores waht id and thenn emabadding thing and meta data 
// const result = await index.upsert({
//     records: docs.map((doc, i) => ({
//         id: `doc-${i}`,
//         values: doc.embedding,
//         metadata: {
//             text: doc.text
//         }
//     }))
// })


// what ever user qusery we are doing again embadding 
const embaddedQuery = await embeddings.embedQuery("how the arav intership")
console.log(embaddedQuery);


// now we can fetch data from pincone which one will be nearest to our query
// now we can fetch data from pincone
const response=await index.query({
    vector: embaddedQuery,
    topK: 3,
    includeMetadata: true
})
// now we can fetch data from pincone and for reading the data we do this
console.log((JSON.stringify(response)));