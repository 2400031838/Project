import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      textAlign: "center"
    }}>
      <h1>Welcome to ProHire</h1>

      <button
        onClick={() => navigate("/login")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;