import React from 'react'
import {userContext} from './CreateContext'
function UserProviderContext({children}) {
    let data="ritam maty is become stronger"
    console.log("userProvider file");
    
  return (
    <userContext.Provider value={data}>
        {children}
    </userContext.Provider>
  )
}

export default UserProviderContext
