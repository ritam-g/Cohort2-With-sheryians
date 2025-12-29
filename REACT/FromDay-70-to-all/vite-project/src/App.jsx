import React, { useState } from 'react';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [allData, setAllData] = useState([]);

  const handleSubmit = (e) => {
       e.preventDefault();
       let newData=[...allData,{name,email}]
      setAllData(newData)  //! it async funciton  
      console.log(newData);
      //! NOW WE HAVE TO STORE DATA IN LOCAL STORAGE 
      setName(''); // Clear form after submit
      setEmail('');
    
  };
  function rmovePerson(id) {
    let cpyData=[...allData]
    cpyData.splice(id,1)
    setAllData(cpyData)
    console.log(cpyData);
    
  }

  return (
    <div className='main h-screen w-screen bg-gray-700 flex items-center justify-center p-8 gap-6'>
      {/* Pass state and setters as props for Two-Way Binding */}
      <Left 
        name={name} 
        setName={setName} 
        email={email} 
        setEmail={setEmail} 
        handleFormSubmit={handleSubmit}
      />
      <Right rmovePerson={rmovePerson} data={allData}/>
    </div>
  );
}

export default App;