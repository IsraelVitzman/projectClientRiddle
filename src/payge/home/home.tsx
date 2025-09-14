import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from "../../assets/head.png"; 

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div id="loginPage">
      <header id="loginHeader">
        <div style={{ flex: 1 }}></div> 
        <div id="loginTopButtons">
          <button onClick={() => navigate("/login")}>כניסה</button>
          <button onClick={() => navigate("/register")}>הרשמה</button>
        </div>
      </header>

      <main id="loginMain">
        <img src={logo} alt="Logo" />
        <button id="playButton" onClick={() => navigate("/play")}>
          שחק
        </button>
      </main>
    </div>
  );
}

export default LoginPage;

