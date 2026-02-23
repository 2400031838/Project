import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";

function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleRegister = () => {
    if (role === "User") {
      navigate("/user-dashboard");
    } else if (role === "Professional") {
      navigate("/professional-dashboard");
    } else if (role === "Admin") {
      navigate("/admin-dashboard");
    } else if (role === "Support") {
      navigate("/support-dashboard");
    } else {
      alert("Please select a role");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
      }}
    >
      <div
        className="zoom-hover"
        style={{
          width: "380px",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>Create Account</h2>

        <input type="text" placeholder="Full Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        <select
          style={inputStyle}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Professional">Professional</option>
          <option value="Admin">Admin</option>
          <option value="Support">Customer Support</option>
        </select>

        <button
          className="zoom-hover"
          style={buttonStyle}
          onClick={handleRegister}
        >
          Register
        </button>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#2563eb" }}>
            Login
          </Link>
        </p>
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

export default Register;