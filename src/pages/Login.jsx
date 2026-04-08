// Login.jsx - A simple login page with role selection and CAPTCHA verification
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  const handleLogin = async () => {
    if (userInput !== captchaText) {
      alert("Incorrect CAPTCHA ❌");
      generateCaptcha();
      setUserInput("");
      return;
    }

    if (!role) {
      alert("Please select a role");
      return;
    }

    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!data) {
        alert("Invalid credentials ❌");
        return;
      }

      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(data));

      // Role-based navigation
      if (data.role === "USER") {
        navigate("/user-dashboard");
      } else if (data.role === "PROFESSIONAL") {
        navigate("/professional-dashboard");
      } else if (data.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else if (data.role === "SUPPORT") {
        navigate("/support-dashboard");
      }

    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div
        className="glass-card"
        style={{
          width: "380px",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>Login to ProHire 🚀</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={selectStyle}
        >
          <option value="">Select Role</option>
          <option value="USER">User</option>
          <option value="PROFESSIONAL">Professional</option>
          <option value="ADMIN">Admin</option>
          <option value="SUPPORT">Support</option>
        </select>

        {/* CAPTCHA */}
        <div
          style={{
            margin: "15px 0",
            fontSize: "20px",
            letterSpacing: "4px",
            fontWeight: "bold",
            background: "rgba(255,255,255,0.15)",
            padding: "8px",
            borderRadius: "6px",
            userSelect: "none",
          }}
        >
          {captchaText}
        </div>

        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={inputStyle}
        />

        <button style={buttonStyle} onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <span
            style={{
              color: "#60a5fa",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={() => navigate("/register")}
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  outline: "none",
};

const selectStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "white",
  color: "black",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg, #3b82f6, #6366f1)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

export default Login;