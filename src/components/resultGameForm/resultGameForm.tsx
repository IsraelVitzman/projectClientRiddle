
import { useFromServer } from "../../TS/getFromServer";

function ResultGame(props: { fromRouter: string; url: string }) {
  const resultGame = useFromServer(props.fromRouter, props.url);
 
  if (resultGame.length === 0) { 
    return <p>אין נתונים להצגה</p>;
  }
  return (
    <div>
      {resultGame.map((element, index) => (
        <p key={index}>
          {element.name}, {element.allTime}
        </p>
      ))}
    </div>
  );
}

export default ResultGame;
