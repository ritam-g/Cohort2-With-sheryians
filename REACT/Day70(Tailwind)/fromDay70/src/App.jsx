import React from "react";
import Button from "./Button";

function App() {
  let arr=["clickme1 ","clickme2 ","clickme3 "]
  return (
    <div className="h-screen w-full bg-gray-700 text-2xl text-white flex gap-2">
      {arr.map(ele=>{
        return <Button data={ele}/>
      })}
    </div>
  );
}

export default App;
