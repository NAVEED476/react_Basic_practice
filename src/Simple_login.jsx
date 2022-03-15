import React from 'react'
import { useState } from 'react'

function Simple_login() {


    const [data,setdata] = useState({
        username:"",
        password:""
    })

    const{username,password} = data




    const handlechange = (e) =>{
        setdata({...data,[e.target.name]:[e.target.value]})
    }

    const handlesubmit =(e) =>{
        e.preventDefault()

        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input    type="text" name='username' value={username} onChange={handlechange}/><br />
            <input    type="password"  name='password' value={password} onChange={handlechange}/><br />
            <input    type="submit" name='submit' />
        </form>
    </div>
  )
}

export default Simple_login