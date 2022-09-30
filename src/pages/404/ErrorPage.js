import { useNavigate } from "react-router-dom";
import "./errorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error-container body-container">
      <img
        onClick={() => navigate("/")}
        src="/img/squeak-inverted2.png"
        alt=""
      />
      <h1>Ooops! This page does not exist</h1>
      <p>Errorcode: 404</p>
      <button className="orange-btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}
