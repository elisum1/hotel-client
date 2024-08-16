import "./Register.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/auth/register", info);
      alert("User registered successfully");
      console.log("User registered:", res.data);
      // Mostrar animación de registro exitoso
      document.querySelector(".successAnimation").style.display = "block";
      setTimeout(() => {
        navigate("/login"); // Redirige al login después del registro
      }, 3000); // Espera 3 segundos para mostrar la animación antes de redirigir
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="titleContainer">
        <span className="logo">
          Best<span className="logoHighlight">Day</span>
        </span>
      </div>
      <div className="lContainer">
        <h2>Registro</h2>
        <form className="form">
          <div className="formInput">
            <label>Username</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Username"
              id="username"
              className="lInput"
            />
          </div>
          <div className="formInput">
            <label>Email</label>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              id="email"
              className="lInput"
            />
          </div>
          <div className="formInput">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              id="password"
              className="lInput"
            />
          </div>
          <div className="formInput">
            <label>Phone</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Phone"
              id="phone"
              className="lInput"
            />
          </div>
          <div className="formInput">
            <label>City</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="City"
              id="city"
              className="lInput"
            />
          </div>
          <div className="formInput">
            <label>Country</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Country"
              id="country"
              className="lInput"
            />
          </div>
          <button onClick={handleRegisterClick} disabled={loading} className="lButton">
            {loading ? "Loading..." : "Register"}
          </button>
          {error && <div className="lError">{error}</div>}
        </form>
        <button onClick={() => navigate("/login")} className="backToLoginButton">
          Back to Login
        </button>

        {/* Animación de registro exitoso */}
        <div className="successAnimation" style={{ display: "none" }}>
          <img src="success-animation.gif" alt="Registration Successful" />
        </div>
      </div>
    </div>
  );
};

export default Register;
