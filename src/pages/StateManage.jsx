import React, { useEffect, useState } from 'react' // rfc

export default function StateManage() {
    // use state
    // 1. Data, 2. UpdateFunction
    const [data, setData] = useState("My data")
    const [num, setNum] = useState(0)

    const updatingData = () => {
        setData("New data")
    }

    useEffect(
        () => {
            if (data == "Hello World") {
                setNum(100000)
            }
        }, 
        [data] // [ dependencies ]
    )

    // useEffecct in Initial
    useEffect(
        () => {
            setNum(-90)
            setData("Initial Value")
        },
        [] // leave empty to run when component loads
    )

    const handleName = (e) => {
        setData(e.target.value)
    }
    
  return (
    <div>
        { data }
        <button onClick={updatingData}>Click me</button>

        <button onClick={
            () => {
                setData("From Callback")
            }
        }>Click Callback</button>

        <div>
            { num }
            <button onClick={() => setNum(num + 1)}>
                +
            </button>
            <button onClick={() => setNum(num - 1)}>
                -
            </button>
        </div>

        <input onChange={
            (e) => {
                setData(e.target.value)
            }
        }></input>
        
        <input onChange={handleName}>
        </input>
    </div>
  )
}