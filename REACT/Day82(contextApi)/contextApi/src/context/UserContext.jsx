import { createContext, useState } from "react";

export const userData = createContext();

function UserContext({ children }) {
  const names = ["Ritam", "Amit", "Sourav", "Rahul", "Ankit"];
  const [user, setUser] = useState("");

  function randomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    setUser(names[randomIndex]);
  }

  return (
    <userData.Provider value={{ user, randomName }}>
      {children}
    </userData.Provider>
  );
}

export default UserContext;
