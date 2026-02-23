import { useNavigate } from "react-router-dom";
import "../index.css";

function UserDashboard() {
  const navigate = useNavigate();

  const services = [
    "Web Development",
    "Graphic Designing",
    "Digital Marketing",
    "Photography",
    "Content Writing",
    "App Development",
    "Video Editing",
    "Home Services"
  ];

  return (
    <div style={{ padding: "40px" }}>

      {/* Welcome Section */}
      <div
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "30px",
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      >
        <h1>Welcome to ProHire 👋</h1>
        <p style={{ marginTop: "10px" }}>
          ProHire connects you with trusted professionals across multiple
          industries. Explore services, hire experts, and grow with confidence.
        </p>
      </div>

      {/* Services Section */}
      <h2 style={{ marginBottom: "20px" }}>Our Services</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {services.map((service, index) => (
          <div key={index} className="zoom-hover" style={serviceCard}>
            {service}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 style={{ marginBottom: "20px" }}>Quick Actions</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Search */}
        <div
          className="zoom-hover"
          style={actionCard}
          onClick={() => navigate("/search")}
        >
          <h3>Search Professionals</h3>
          <p>Browse and hire skilled professionals instantly.</p>
        </div>

        {/* My Bookings */}
        <div
          className="zoom-hover"
          style={actionCard}
          onClick={() => navigate("/my-bookings")}
        >
          <h3>My Bookings</h3>
          <p>Track and manage your service bookings.</p>
        </div>

        {/* Wallet */}
        <div
          className="zoom-hover"
          style={actionCard}
          onClick={() => alert("Wallet feature coming soon!")}
        >
          <h3>Credit Wallet</h3>
          <p>View available credits and transactions.</p>
        </div>
      </div>
    </div>
  );
}

const serviceCard = {
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  textAlign: "center",
  fontWeight: "500",
  cursor: "pointer",
};

const actionCard = {
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  cursor: "pointer",
};

export default UserDashboard;