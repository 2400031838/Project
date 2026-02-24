import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function ProfessionalDashboard() {
  const navigate = useNavigate();

  const [earnings, setEarnings] = useState(0);
  const [clients, setClients] = useState(0);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    let total = 0;

    storedBookings.forEach((b) => {
      const priceNumber = b.price
        ? parseInt(b.price.replace(/[^0-9]/g, ""))
        : 0;

      total += priceNumber;
    });

    setEarnings(total);
    setClients(storedBookings.length);
    setBookings(storedBookings);
  }, []);

  return (
    <div style={{ padding: "40px", color: "white" }}>

      {/* Header */}
      <div style={headerStyle}>
        <h1>Professional Dashboard 👨‍💼</h1>
        <p>Manage your services, track earnings, and grow your client base.</p>
      </div>

      {/* Stats */}
      <div style={statsGrid}>
        <div style={statCard}>
          <h2>₹{earnings}</h2>
          <p>Total Earnings</p>
        </div>

        <div style={statCard}>
          <h2>{clients}</h2>
          <p>Active Clients</p>
        </div>

        <div style={statCard}>
          <h2>{clients > 0 ? "4.8 ⭐" : "0 ⭐"}</h2>
          <p>Average Rating</p>
        </div>
      </div>

      {/* Manage */}
      <h2 style={{ marginTop: "50px", marginBottom: "20px" }}>
        Manage Services
      </h2>

      <div style={manageGrid}>
        <div style={actionCard} onClick={() => navigate("/add-service")}>
          <h3>➕ Add New Service</h3>
          <p>Create and publish a new service offering.</p>
        </div>

        <div style={actionCard} onClick={() => navigate("/view-bookings")}>
          <h3>📋 View Bookings</h3>
          <p>Check booking requests from clients.</p>
        </div>

        <div style={actionCard} onClick={() => navigate("/edit-profile")}>
          <h3>✏ Edit Profile</h3>
          <p>Update your skills, pricing, and portfolio.</p>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 style={{ marginTop: "50px", marginBottom: "20px" }}>
        Recent Bookings
      </h2>

      {bookings.length === 0 && <p>No bookings yet.</p>}

      {bookings.map((b, index) => (
        <div key={index} style={bookingCard}>
          <p><strong>Client:</strong> {b.name}</p>
          <p><strong>Service:</strong> {b.service}</p>
          <p><strong>Price:</strong> {b.price}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: "#22c55e" }}>Hired</span>
          </p>
        </div>
      ))}
    </div>
  );
}

/* Styles */

const headerStyle = {
  background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  padding: "30px",
  borderRadius: "16px",
  marginBottom: "40px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const statCard = {
  background: "rgba(255,255,255,0.15)",
  padding: "25px",
  borderRadius: "14px",
  textAlign: "center",
};

const manageGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const actionCard = {
  background: "rgba(255,255,255,0.15)",
  padding: "30px",
  borderRadius: "16px",
  cursor: "pointer",
};

const bookingCard = {
  background: "rgba(255,255,255,0.15)",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "15px",
};

export default ProfessionalDashboard;