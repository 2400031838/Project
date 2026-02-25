import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        ProHire 👨‍💼
      </h2>

      <div style={rightSection}>
        <Link to="/" style={linkStyle}>Home</Link>

        {!user ? (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        ) : (
          <div style={{ position: "relative" }}>
            <div
              style={profileIcon}
              onClick={() => setOpen(!open)}
            >
              👤
            </div>

            {open && (
              <div style={dropdown}>
                <p style={{ margin: "10px" }}>
                  {user.name || "User"}
                </p>
                <hr />
                <button
                  style={logoutBtn}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

/* Styles */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "#0f172a",
  color: "white",
};

const rightSection = {
  display: "flex",
  alignItems: "center",
  gap: "25px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const profileIcon = {
  fontSize: "22px",
  cursor: "pointer",
};

const dropdown = {
  position: "absolute",
  top: "40px",
  right: "0",
  background: "#1e293b",
  borderRadius: "8px",
  padding: "10px",
  minWidth: "120px",
};

const logoutBtn = {
  background: "#ef4444",
  border: "none",
  color: "white",
  padding: "5px 10px",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "5px",
};

export default Navbar;