import { useContext } from "react";
import { userData } from "../context/UserContext";

function Login() {
    const {user}=useContext(userData)
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <h1 className="text-4xl font-semibold text-purple-800">
        Login Page : {user===''?"ritam":user}
      </h1>
    </div>
  );
}

export default Login;
