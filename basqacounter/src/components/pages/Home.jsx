import { UseCount } from "../../../../salamqaqa/src/context/Countcontext"

const HomePage = ()=>{
    const [count,setCount] =UseCount()
    return (
        <>
        {count}
        <rehimnigga>Rehimnigga</rehimnigga>
        <button onClick={()=>setCount(count=count+1)}></button>
        </>
    )
}