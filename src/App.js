import react, { useState } from "react";


const App = () => {
  const state = useState();
 
  const [count,setCount]= useState(0);

const IncNum=()=>{
   setCount(count+1); 
  console.log("clicked" + count++)
};

  return(
    <>
    <div className="divbhai">
      <h1>{count}</h1>
      <button className="btnC" onClick={IncNum}>Click Me</button>
      </div>
    </>
  ) 

}

export default App;