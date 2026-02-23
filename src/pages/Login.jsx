import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "User") {
      navigate("/user-dashboard");
    } else if (role === "Professional") {
      navigate("/professional-dashboard");
    } else if (role === "Admin") {
      navigate("/admin-dashboard");
    } else if (role === "Support") {
      navigate("/support-dashboard");
    } else {
      alert("Please select a role to login");
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
        className="zoom-hover"
        style={{
          width: "350px",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>Login to ProHire</h2>

        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
        />

        <select
          style={inputStyle}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Professional">Professional</option>
          <option value="Admin">Admin</option>
          <option value="Support">Support</option>
        </select>

        <button
          className="zoom-hover"
          style={buttonStyle}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Login;