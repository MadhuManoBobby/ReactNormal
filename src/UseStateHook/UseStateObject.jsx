import React, { useState } from 'react'

export const UseStateObject = () => {
    const[user, setUser] = useState({firstName:'',lastName:''})
  return (
    <div>
        <label htmlFor="">Enter your First Name</label>
        <input type="text" value={user.firstName} onChange={e=> setUser({...user,firstName: e.target.value})} />
        <br />
        <label htmlFor="">Enter your Last Name</label>
        <input type="text" value={user.lastName} onChange={e=> setUser({...user,lastName: e.target.value})} />
        <h2>{JSON.stringify(user)}</h2>  
        <h1>Your FirstName: {user.firstName}</h1>  
        <h1>Your LastName: {user.lastName}</h1>  
    </div>
  )
}
