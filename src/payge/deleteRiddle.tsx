import { useRef } from "react"
import { Servics } from "../apiCLient/services"

export function DeleteRiddle() {
    const id= useRef<HTMLInputElement>(null)
    const send = async () => {
        if (id.current?.value !== null) {
            const servics = Servics("/riddles")
            const url =`/deleteRiddle/${id.current!.value}`
            const result =await servics.del(url)
            return <p>{result.message}</p>
        }
    }
    return (<>
        <h1>מחק חידה</h1>
        <div className="deleteRiddle">
            <input type="text" name="id" placeholder="הכנס מספר חידה למחיקה" ref={id} />
            <button onClick={send}>שלח</button>

        </div>
    </>
    )

}
export default DeleteRiddle