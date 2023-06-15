import { useState } from 'react';
import './App.css';

function App() {
  const [list,setList]= useState([])
  const [sum,setSum]= useState()
  const [pairs,setPairs]= useState()
  const app=()=>{
   const result=[]
   const temp= new Map()
   for(let i=0;  i<list.length; i++){
        const findNumber=sum-list[i];
        if(temp.has(list[i])){
            result.push(`${temp.get(list[i])},${list[i]}`)
        }else{
            temp.set(findNumber, list[i])
        }  
   }
   setPairs(result)
}
  return (
    <div className="App">
        <label>
          List:
          <input data-testid='inputList' placeholder='Comma separated list of integers' type="text" name="list" onChange={(e)=>setList(e.currentTarget.value.split(',').map((el)=>parseInt(el)))}/>
        </label>
        <label>
          Sum:
          <input data-testid='inputSum' placeholder='target sum' type="text" name="sum" onChange={(e)=>setSum(parseInt(e.currentTarget.value))}/>
        </label>
      <button data-testid='button'  type='submit' onClick={app}>Submit</button>
      {pairs?.length>0 ?
        <div className="list">Pairs 
          {pairs.map((pair,index)=><div key={`key-${pair}-${index}`}>{pair}</div>)}
        </div>
        :<p>Not Pairs</p>
        }
    </div>
  );
}

export default App;
