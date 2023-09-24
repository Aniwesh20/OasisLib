import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Signup.css";
import PasswordInput from "../../components/PasswordField/PasswordField";
import { auth } from "../../firebase";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new user with Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          const user = res.user;
          updateProfile(user, {
            displayName: name,
          });
        }
      );

      console.log("Signed up successfully!");

      navigate('/login');

    } catch (error) {
      if (error.code === "auth/invalid-email") {
        alert("Invalid email. Please enter a valid email address.");
      }
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text" className="signup-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email" className="signup-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <PasswordInput className="signup-1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button id="SignUp" type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link className="login-hover" to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;