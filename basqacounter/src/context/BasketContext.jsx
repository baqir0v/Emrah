import { useState } from "react";
import { useContext } from "react";

const CountContext = useContext()

export const countProvider=({children})=>{
    const [count, setCount] = useState([])
    return (
        <CountContext.Provider value={{count,setCount}}>
            {children}
        </CountContext.Provider>
    )
}