import 'dotenv/config'
import readline from 'readline/promises'
import { ChatMistralAI } from "@langchain/mistralai";
import {HumanMessage} from 'langchain'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const model = new ChatMistralAI({
    model: "mistral-small-latest",
    temperature: 0.1,

});
let messageHistory = []
while (true) {
    const question =await rl.question("enter your quesiton: you")

    messageHistory.push(new HumanMessage(question))
    //NOTE - messageHistory should fo to the mdoel then he can udnerstand what to do 
    const response = await model.invoke(messageHistory)

    messageHistory.push(response)

    console.log("response",response.content)
    
    
}
   

