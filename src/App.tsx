
import { useState } from "react";
import "./App.css";
import { items } from "./utils/checkItems";

function App() {
  const [checkbox,setCheckbox] = useState({});
  const handleChanges = (e,fruit)=>{
      setCheckbox(prev=> ({...prev,[fruit.id]:{checkbox:e.target.checked}}));
          if(fruit?.children?.length>0){
            fruit?.children?.forEach((val)=> {
              handleChanges(e,val);
            })
          }
    }

  const NestedItems = ({fruit})=>{
    return (
      <>
      <div key={fruit.id}>
          <h2>{fruit.label}</h2>
          <input type="checkbox" defaultChecked={checkbox?.[fruit.id]?.checkbox ??  fruit.checked} onChange={(e)=>handleChanges(e,fruit)}/>
      </div>
      {!!fruit?.children?.length && fruit?.children?.map((item)=>{
        return (
          <div className="pl-4">
            <NestedItems fruit={item}/>
          </div>
        )
      })}
      </>
    )
  }

  return (
    <>
      <h1>Nested Checkbox</h1>
      {items?.map((fruit)=> <NestedItems fruit={fruit}/>)}
      
    </>
  );
}

export default App;
