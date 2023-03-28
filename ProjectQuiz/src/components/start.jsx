import { Link } from "react-router-dom";
import "./start.css";

function Start() {
  return (
    <div className="start-wrapper">
      <div className="start">
        <input type="text" placeholder="nickname.." />
        <Link to="/categories">FREE PLAY</Link>
        <a href="#">DAILY CHALLENGE</a>
      </div>
      <div className="highscore">
        <p>Highscore</p>
      </div>
    </div>
  );
}

export default Start;
