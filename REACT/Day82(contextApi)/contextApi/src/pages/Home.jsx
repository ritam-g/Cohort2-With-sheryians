import { useContext } from "react";
import { userData } from "../context/UserContext";

function Home() {
    let { user,randomName}=useContext(userData)
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-4xl font-semibold text-gray-800 flex gap-8 items-center flex-col">
        <h1>user name is : {user===''?"ritam":user}</h1>
        <h1>Home Page</h1>
        <button
        onClick={()=>{
            randomName()
            
        }}
         className="bg-amber-600 text-4xl rounded-2xl p-4 active:scale-75 cursor-pointer"> change  name</button>
      </div>
    </div>
  );
}

export default Home;
