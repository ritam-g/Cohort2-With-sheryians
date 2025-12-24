import React,{useState} from 'react'

function App() {
  const [number, setnumber] = useState(0);
  function increase() {
    console.log("user clicked on increase");
    number<10?setnumber(number+1):number
    
    
  }
  function Decrease() {
    console.log("user clicked on increase");
    number>1?number==1? number: setnumber(number-1):number
    
  }
  return (
    <div className='main bg-gray-700 h-screen w-screen  flex flex-col items-center justify-center gap-[1rem] text-2xl'>
      <h1>{number}</h1>
      <button 
      onClick={increase}
       className='bg-green-400 rounded-1xl p-2 rounded-2xl'>Increse Me</button>
      <button onClick={Decrease}
      className='bg-red-400 rounded-1xl p-2 rounded-2xl'>Decrese Me</button>
    </div>
  )
}

export default App
