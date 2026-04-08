import React, { useRef, useState } from 'react'

const App = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const [form, setForm] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setForm([
      ...form,
      {
        name: nameRef.current.value,
        email: emailRef.current.value
      }
    ])
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="enter your name" />
        <input ref={emailRef} type="email" placeholder="enter your email" />
        <button type="submit">submit</button>
      </form>

      {form.length > 0 && form.map((data, index) => (
        <div key={index}>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
        </div>
      ))}
    </>
  )
}

export default App