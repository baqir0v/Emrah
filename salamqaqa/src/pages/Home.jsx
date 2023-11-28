import { UseCount } from "../context/Countcontext"

const HomePage = ()=>{
    const {count,setCount} = UseCount()

    return (
        <div>
            {count}
            HomePage
            <button onClick={()=>setCount(count=>count+1)}>+Count</button>
        </div>
    )
}

export default HomePage