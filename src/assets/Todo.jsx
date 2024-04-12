import { useState } from "react";

export default function Todo(){
    const[name,setName]=useState('')
    const[list,setList]= useState([])


    function sub(e){
        e.preventDefault()
        setList([...list, name])
        setName('')
       
    }
  
    setList(list.filter)
    return(

        <>
        <div>

            <form className="">
                <input type="text"  value={name} onChange={(e)=> setName(e.target.value)} className="h-10"/>
                <button onClick={sub} className="bg-blue-500">Click</button>
            </form>
            
           {list.map((item, index)=> <section key={index}>{item}</section>)}
        </div>
        
        </>
    )
}