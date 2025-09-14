import { useRef, useState } from "react"
import ResultGame from "../components/resultGameForm/resultGameForm"


function ResultGameByUser() {
    const inputId=useRef<HTMLInputElement>(null)
    const [id ,setId] =useState("")
    const send=()=>{
        if(inputId.current?.value){
            setId(inputId.current.value)
        }
    }
    return (
        <>
            <h1>תוצאות משחק</h1>
            <input type="text" name="id" ref={inputId}  />
            {id && <ResultGame url={`/resultBestPlayer/${id}`} fromRouter="/resultgame" />}
            <button onClick={send}>שלח</button>
        </>
    )
}
export default ResultGameByUser