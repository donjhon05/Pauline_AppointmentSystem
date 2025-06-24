import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation (replace with real authentication)
    if (email === "user@example.com" && password === "password") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="parallax-login-bg">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        {error && (
          <div
            style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}
          >
            {error}
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <span>Don't have an account? </span>
          <a
            href="/register"
            style={{
              color: "#1976d2",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Register
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
