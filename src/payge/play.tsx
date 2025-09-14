import { useState } from "react";
import { useFromServer } from "../TS/getFromServer.ts";
import { CheckAnswer } from "../TS/logikGame.ts";
import { useTime } from "../TS/timeOfGame.ts";
import { AddTime } from "../TS/postTime.ts";

function Play() {
  const name = localStorage.getItem("3");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  const riddles = useFromServer("/riddles", "/getAllRiddles");
  const time = useTime();

  const play = async () => {
    const result = CheckAnswer(answer, riddles[count]);
    setMessage(result.message);
    if (result.message === "תשובה-נכונה") setCount(count + 1);
    setAnswer("");
  };

  if (riddles.length === 0) {
    return <p>טוען חידות...</p>;
  }

  if (count >= riddles.length) {
    if (name !== null) {
      time.stop(); 
      AddTime(name, time.totalSeconds); 
    }
    return <p>👏👏👏👏סיימת את כל החידות👏👏👏👏</p>;
  }

  return (
    <div id="playPage">
      {name !== null && <h3>{name} :שלום</h3>}
      <h1>חידות</h1>
      <ul>
        <li>
          חידה מספר: {riddles[count].id}
          <h4>שם החידה: {riddles[count].name}</h4>
          <h4>שאלה: {riddles[count].question}</h4>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer((e.target as HTMLInputElement).value)}
            placeholder="תשובה שלך"
          />
          <button onClick={play}>שלח</button>
          <p>הודעה: {message}</p>
          <p>
            זמן: {time.minutes}:{time.seconds}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Play;
