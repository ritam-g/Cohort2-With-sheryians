import React, { useRef, useState } from 'react'

const App = () => {
  const formRef = useRef()
  const [form, setForm] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setForm([
      ...form,
      {
        name: formRef.current.name.value,
        email: formRef.current.email.value
      }
    ])
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input  type="text" name="name" placeholder="enter your name" />
        <input type="email" name="email" placeholder="enter your email" />
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