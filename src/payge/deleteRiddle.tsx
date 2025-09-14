import { useRef ,useState} from "react"
import { Servics } from "../apiCLient/services"

export function DeleteRiddle() {
    const id= useRef<HTMLInputElement>(null)
    const [serverMessage, setServerMessage] = useState<string>("")
    const send = async () => {
        if (id.current?.value !== null) {
            const servics = Servics("/riddles")
            const url =`/deleteRiddle/${id.current!.value}`
            const result =await servics.del(url)
            setServerMessage(result.message) 

        }
        
        id.current!.value=""
    }

     
    return (<>
        <h1>מחק חידה</h1>
        <div className="deleteRiddle">
            <input type="text" name="id" placeholder="הכנס מספר חידה למחיקה" ref={id} />
            <button onClick={send}>שלח</button>
            {serverMessage && <p>{serverMessage}</p>}
        </div>
    </>
    )

}
export default DeleteRiddle