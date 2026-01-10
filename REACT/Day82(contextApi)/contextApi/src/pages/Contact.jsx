import { useContext } from "react";
import { userData } from "../context/UserContext";

function Contact() {
    const {user} = useContext(userData)
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <h1 className="text-4xl font-semibold text-green-800 capitalize">
        can  i get your contect : {user===''?"ritam":user}
      </h1>
    </div>
  );
}

export default Contact;
