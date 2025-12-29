import React, { useState } from 'react';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [allData, setallData] = useState([]);
  function submitClick(e) {
    e.preventDefault();
    let oldData = [...allData]
    oldData.push({ name, email })
    setallData(oldData)//! this async function 
    //! now we have to store the data in localStorage
    localStorage.setItem("all-Data", JSON.stringify(oldData)) //! we moving old dta becuse the setall data funciton
    // ! is asynce may be its not sotre in that time beacuse its in heap memory so we have to pass old data its 
    // !in stacke so it will give current data 
  }
  function rmovePerson(params) {
    //! i have to remove person
    let oldData=[...allData]
    oldData.splice(params,1)
    setallData(oldData)
    localStorage.setItem("all-Data", JSON.stringify(oldData))
  }
  return (
    <div className='main h-screen w-screen bg-gray-700 flex items-center justify-center p-8 gap-6'>
      {/* Pass state and setters as props for Two-Way Binding */}
      <Left
        name={name}
        setName={setname}
        email={email}
        setEmail={setemail}
        handleFormSubmit={submitClick}
      />
      <Right rmovePerson={rmovePerson} data={JSON.parse(localStorage.getItem("all-Data"))}/>
    </div>
  );
}

export default App;