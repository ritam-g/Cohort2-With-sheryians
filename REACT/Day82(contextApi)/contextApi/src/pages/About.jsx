import { useContext } from "react";
import { userData } from "../context/UserContext";

function About() {
   const {user}= useContext(userData)
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-semibold text-blue-800">
        About Page : {user===''?"ritam":user}
      </h1>
    </div>
  );
}

export default About;
