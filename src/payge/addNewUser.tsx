import VerificationForm from "../components/verificationForm/verificationForm"

export function NewUser() {
    return(
        <div>
            <h1>הרשמה</h1>
            <VerificationForm url="/newuser"/>
        </div>
    )
}
export default NewUser