
import ResultGame from "../components/resultGameForm/resultGameForm"


function ResultAllGame() {
    
    return (<>
        <h1>תוצאות כל המשחקים</h1>
        <ResultGame url="/resultBestAllPlayers" fromRouter="/resultgame" />
       
    </>
    )
}
export default ResultAllGame