import { useRef } from "react"
import { Servics } from "../../apiCLient/services"

function SendForm(props: { method: 'post' | 'put'; fromRouter: string; url: string; }) {

    const ref = useRef<any>(null)
    const send = async () => {
        if (ref.current.elements !== null) {
            const data = {
                id: ref.current.elements["id"].value,
                name: ref.current.elements["name"].value,
                hint: ref.current.elements["hint"].value,
                question: ref.current.elements["question"].value,
                answer: ref.current.elements["answer"].value,
            }
            
            const servics = Servics(props.fromRouter)
            console.log(props.url);
            await servics[props.method](props.url, data)

        }
    }
    return (<>
        <div className="Riddle">
            <form ref={ref}  >
                <input type="text" name="id" placeholder=" מספר חידה" />
                <input type="text" name="name" placeholder="שם החידה" />
                <input type="text" name="hint" placeholder="רמז" />
                <input type="text" name="question" placeholder="שאלה" />
                <input type="text" name="answer" placeholder="תשובה" />
            </form>
            <button onClick={send}>שלח</button>

        </div>
    </>
    )

}
export default SendForm