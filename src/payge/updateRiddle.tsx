import { useState } from "react"
import SendForm from "../components/sendFrom/senfFrom"

function UpdateRiddle() {
    const[id,setId] = useState("")
    const url =`/updateRiddle/${id}`
    return <>
        <h1>עדכן חידה קיימת</h1>
        <input type="text"  name={id} placeholder="הכנס מספר חידה שאותה אתה משנה"  onChange={(e) => setId((e.target as HTMLInputElement).value)}/>
        <SendForm url={url} fromRouter="/riddles"  method="put" />
    </>
}
export default UpdateRiddle