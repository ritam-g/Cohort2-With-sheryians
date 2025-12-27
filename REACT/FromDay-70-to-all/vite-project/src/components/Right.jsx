import React from 'react';

function Right( props ) {
  return (
    <div className="right w-[50%] h-[80%] flex items-center justify-center p-6">
      <div className='h-full w-[90%] bg-gray-900/50 border border-gray-800 rounded-3xl flex flex-col p-4 gap-3 overflow-y-auto'>
        <h2 className="text-white font-bold mb-2 w-full  ">Submitted List</h2>
        
        {props.data.map((user, index) => (
          <div key={index} className='userDetails w-full bg-gray-800 border border-gray-700 flex items-center justify-between px-4 py-3 rounded-2xl'>
            <h1 className="text-gray-100 font-semibold truncate">
              {user.name} 
            </h1>
            <div className="flex items-center gap-4">
              <h2 className="text-gray-400 text-sm italic">
                {user.email}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <h2 className="text-gray-400 text-sm italic">
                <i className="ri-phone-line"></i>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-gray-400 text-sm italic">
                <button 
                 onClick={()=>{
                  props.rmovePerson(index)
                }}
                className='bg-red-700 rounded-2xl capitalize p-1 active:scale-95'>remove</button>
              </h2>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Right;