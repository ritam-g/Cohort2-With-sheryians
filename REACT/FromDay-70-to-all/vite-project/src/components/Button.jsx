import React from 'react'

function Button(props) {
    function click() {
        let count=0
        return function () {
            // alert("User Clicked")
            console.log(count);
            
            count++
            
        }
    }
  return (
    <button 
    onClick={click()}
    onDoubleClick={
        function(){
            let userData=prompt("enter some details")
            console.log(userData);
            
        }
    }
    className='
    active:scale-95  cursor-pointer
     text-3xl text-white font-bold capitalize h-[2rem]  bg-green-600 p-[2rem] flex items-center justify-center rounded-3xl '>
      {props.data}
    </button>
  )
}

export default Button
