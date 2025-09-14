import SendForm from "../components/sendFrom/senfFrom"
function CreateRiddle() {
    return <>
         <h1>צור חידה חדשה</h1>
        <SendForm url="/addRiddle" fromRouter="/riddles"  method="post" />
        
    </>
}
export default CreateRiddle