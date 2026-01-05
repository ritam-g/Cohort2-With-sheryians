import { useState } from "react";

function Form({ onSubmitData }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmitData({
      name,
      color,
    });

    setName("");
    setColor("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-blue-400 w-[14rem] p-2 rounded-2xl text-black"
      />

      <input
        type="text"
        placeholder="Enter your favorite color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="bg-blue-400 w-[14rem] p-2 rounded-2xl text-black"
      />

      <button
        type="submit"
        className="bg-green-400 w-fit p-2 rounded-2xl text-black"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
