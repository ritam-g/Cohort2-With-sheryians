import { useContext } from "react";
import { userData } from "../context/UserContext";

function Profile() {
   const {user}= useContext(userData)
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <h1 className="text-4xl font-semibold text-yellow-800">
        Profile Page : {user===''?"ritam":user}
      </h1>
    </div>
  );
}

export default Profile;
