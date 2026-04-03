import React, { useEffect, useState } from 'react'
import Card from './components/Card';

function App() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [formData, setformData] = useState([])

  // ✅ Load data ONLY once (on mount)
  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setformData(JSON.parse(storedData));
    }
    console.log('store data', JSON.stringify(storedData));

  }, [])

  // ✅ Save data whenever formData changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('formData updated:', formData);
  }, [formData])

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email) return; // basic validation

    setformData(prev => [...prev, { name, email }]);

    // ✅ clear inputs after submit
    // setname('');
    // setemail('');
  }
  function delteUser(key) {
    console.log(key);

    setformData(prev => (
      prev.filter((_, index) => index !== key)
    ))
  }
  function editUser(key, name, email) {
    setformData(prev => (
      prev.map((data, index) => (
        index == key ? { ...data, name, email } : data
      ))
    ))
  }
  return (
    <main className='w-full h-screen bg-gray-700 flex flex-col items-center justify-center'>

      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input
          placeholder='enter your name'
          value={name}
          onChange={(e) => setname(e.target.value)}
          className='p-2 rounded'
        />
        <input
          type="email"
          placeholder='enter your email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className='p-2 rounded'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          create post
        </button>
      </form>

      <div className='mt-8'>
        {
          formData.map((data, index) => (
            // key should be unique and stable, using index can cause issues if items are added/removed
            <Card editUser={editUser} delteUser={delteUser} index={index} name={data.name} email={data.email} />
          ))
        }
      </div>

      

    </main>
  )
}

export default App