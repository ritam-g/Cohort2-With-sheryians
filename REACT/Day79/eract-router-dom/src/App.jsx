import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    color: "",
  });

  function handleFormData(data) {
    setUserData(data);
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black 
flex items-center justify-center">

  <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl 
  flex flex-col items-center gap-6 w-[22rem]">

    <h1 className="text-3xl font-semibold tracking-wide text-blue-700">
      Welcome 👋
    </h1>

    <Form onSubmitData={handleFormData} />

    {userData.name && (
      <div className="text-center space-y-2 mt-2">
        <h2 className="text-2xl font-medium text-pink-400">
          Hello, <span className="text-indigo-400">{userData.name}</span>
        </h2>

        <p className="text-lg text-gray-300">
          Your favorite color is{" "}
          <span className="font-semibold text-pink-400">
            {userData.color}
          </span>
        </p>
      </div>
    )}

  </div>
</div>

  );
}

export default App;
