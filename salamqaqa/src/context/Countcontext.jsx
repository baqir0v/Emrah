import { useContext, useState } from "react";
import { createContext } from "react"; 

const Context = createContext()

export const Countprovider=({children})=>{
    const [count,setCount] = useState(0)
    const data = {
        count,setCount
    }
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export const UseCount =()=>useContext(Context)
