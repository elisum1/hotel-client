import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showWelcome, setShowWelcome] = useState(false);

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      setShowWelcome(true);
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redirige después de 2 segundos
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const handleGuestClick = () => {
    navigate("/");
  };

  return (
    <div className="login">
      {showWelcome && (
        <div className="welcomeAnimation">
          <div className="airplane">✈️</div>
          <h1>¡Bienvenido!</h1>
        </div>
      )}
      <div className="titleContainer">
        <span className="logo">
          Best<span className="logoHighlight">Day</span>
        </span>
      </div>
      <div className="lContainer">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button
          disabled={loading}
          onClick={handleLoginClick}
          className="lButton"
        >
          Login
        </button>
        {error && <div className="lError">{error.message}</div>}
        <button onClick={handleGuestClick} className="lGuestButton">
          Continue as Guest
        </button>
        
      </div>
    </div>
  );
};

export default Login;
