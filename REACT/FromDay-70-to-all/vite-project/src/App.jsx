import React, { useState } from 'react';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [allData, setAllData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setAllData([...allData, { name, email }]);
      setName(''); // Clear form after submit
      setEmail('');
    }
  };

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
      <Right data={allData}/>
    </div>
  );
}

export default App;