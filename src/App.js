
import {useState, useMemo} from "react"
import './App.css';

function App() {
  const [dark,setDark] = useState(false)
const [number,setNumber]=useState(0)

  let backStyle = {
    backgroundColor: dark ? "#121416" : "white",
    color:dark?"white":"dark"
  }

  const slowFunc= (num)=>{
    console.log("start")
    for(let i =0;i<1000; i++){}
    return num
  }
  const doubleNum = useMemo((number)=>{
    slowFunc(number)
  },[number])
  return (
    <div className="App" style = {backStyle}>
    <input type="number" value = {number} onChange={(e)=>{setNumber(parseInt(e.target.value))}} />
     <button onClick={()=>setDark(prev => !prev)}> Click me</button>
     <div>
      {doubleNum}
     </div>
    </div>
  );
}

export default App;
