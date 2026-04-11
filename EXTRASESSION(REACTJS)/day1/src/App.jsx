import React, { useRef } from 'react';

function App() {
  // 1. Attach the ref to the form element
  const formRef = useRef(null);
  const nameRef = useRef(null)
  const EmailRef = useRef(null)
  const ageRef = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault();

    // 2. Access the form data using the FormData API
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
      console.log(nameRef.current.value,EmailRef.current.value,ageRef.current.value);
      
      console.log("Form Data:", data); 
      // Output: { name: "...", email: "...", age: "..." }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>User Registration</h2>
      {/* 3. Link the ref here */}
      <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '250px' }}>
        
        <input ref={nameRef } name="name" type="text" placeholder="Name" required />
        <input ref={EmailRef} name="email" type="email" placeholder="Email" required />
        <input  ref={ageRef} name="age" type="number" placeholder="Age" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;