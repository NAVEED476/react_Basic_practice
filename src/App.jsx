import { useState } from "react";


function App() {

  const [state, setstate] = useState({
    username: "",
    passowrd: ""
  })

  const { username, passowrd } = state;

  const handlechange = (e) => {
    setstate({ ...state, [e.target.name]: [e.target.value] })

  }

  const handlesubmit = (e)=>{
    e.preventDefault()
    console.log(state)
  }




  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <input type="text" value={username} name="username" onChange={handlechange} placeholder="enter name " /><br />

        <input type="password" value={passowrd} name="passowrd" onChange={handlechange} placeholder="password" /><br />


        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
