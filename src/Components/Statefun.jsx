import { useState } from "react"

const Statefun=()=>{
    let [count, setCount]=useState("0")
    let btn1=()=>{
        setCount(count+1)
    }
    let btn2=()=>{
        setCount(count-1)
    }
    let btn3=()=>{
        setCount(0)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={btn1}>increment</button>
            <button onClick={btn2}>decrement</button>
            <button onClick={btn3}>reset</button>
        </div>

    )
}
export default Statefun