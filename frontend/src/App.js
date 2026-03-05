import React, { useState } from "react";

function App() {

  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const calculateInterest = async () => {

    const response = await fetch("http://localhost:5000/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ principal, rate, time })
    });

    const data = await response.json();
    setResult(data.simpleInterest);
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h2>Simple Interest Calculator</h2>

      <input placeholder="Principal"
      onChange={(e)=>setPrincipal(e.target.value)} />

      <br/><br/>

      <input placeholder="Rate"
      onChange={(e)=>setRate(e.target.value)} />

      <br/><br/>

      <input placeholder="Time"
      onChange={(e)=>setTime(e.target.value)} />

      <br/><br/>

      <button onClick={calculateInterest}>Calculate</button>

      {result && <h3>Simple Interest: {result}</h3>}

    </div>
  );
}

export default App;