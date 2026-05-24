import React, { useState } from 'react'
import { items } from '../utils/checkItems';

const NestedCheckbox = () => {
 const [checkbox,setCheckbox] = useState<object>({});
   const handleChanges = ({e,fruit}:{e:React.ChangeEvent<HTMLInputElement>;fruit:any})=>{
       setCheckbox(prev=> ({...prev,[fruit.id]:{checkbox:e.target.checked}}));
           if(fruit?.children?.length>0){
             fruit?.children?.forEach((val:any)=> {
               handleChanges({e:e,fruit:val});
             })
           }
     }
 
   const NestedItems = ({fruit}:{fruit:any})=>{
     return (
       <>
       <div key={fruit.id}>
           <h2>{fruit.label}</h2>
           <input type="checkbox" defaultChecked={checkbox?.[fruit.id]?.checkbox ??  fruit.checked} onChange={(e)=>handleChanges({e,fruit})}/>
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

export default NestedCheckbox