import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import PasswordInput from "../../components/PasswordField/PasswordField";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Logged in successfully!");

      navigate("/book");

    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        alert("User not found. Please check your email and try again.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email. Please enter a valid email address.");
      } else if (error.code === "auth/user-disabled") {
        alert("Your account has been disabled. Please contact support.");
      } else {
        alert("An error occurred while logging in. Please try again later.");
      }

      console.error("Error logging in:", error.message);
      
      
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="round"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <PasswordInput className="round" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button id="Login" type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link className="signup-hover" to="/signup">Sign Up</Link></p>
      </div></div>
  );
}

export default Login;