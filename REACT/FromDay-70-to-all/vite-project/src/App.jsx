import React,{useState} from 'react'

function App() {
  const [userInput, setuserInput] = useState('');
  function onSubmitt(e) {
    e.preventDefault();
    console.log(userInput);
  
  }
  return (
    <div  className='h-screen w-screen bg-gray-700 text-white flex gap-3 items-center justify-center '>
      <form
       onSubmit={function (e) {
          onSubmitt(e)
        }
      }
      >
        <input
        onChange={function (e) {
          setuserInput(e.target.value)
            }
          }
         
         value={userInput}
         type="text" placeholder='enter your name'
         />
        <input type="submit" value="submit"  className='p-2 border-2'/>
      </form>
    </div>
  )
}

export default App
