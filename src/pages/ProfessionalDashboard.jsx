import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function ProfessionalDashboard() {
  const navigate = useNavigate();

  const [earnings, setEarnings] = useState(0);
  const [clients, setClients] = useState(0);
  const [bookings, setBookings] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchBookings = () => {
      fetch(`http://localhost:8080/booking/professional/${user.email}`)
        .then((res) => res.json())
        .then((data) => {

          // 🔔 Show notification only if new booking added
          if (data.length > bookings.length) {
            setShowNotification(true);

            setTimeout(() => {
              setShowNotification(false);
            }, 3000);
          }

          setBookings(data);

          // 💰 Calculate earnings
          let total = 0;
          data.forEach((b) => {
            const price = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
            total += price;
          });

          setEarnings(total);

          // 📊 Booking count (THIS IS YOUR MAIN REQUIREMENT)
          setClients(data.length);
        });
    };

    fetchBookings(); // first load

    const interval = setInterval(fetchBookings, 5000); // auto refresh every 5 sec

    return () => clearInterval(interval);
  }, [user.email, bookings.length]);

  return (
    <div style={{ padding: "40px", color: "white" }}>

      {/* 🔔 Notification */}
      {showNotification && (
        <div style={notificationStyle}>
          🎉 You got a new booking!
        </div>
      )}

      {/* Header */}
      <div style={headerStyle}>
        <h1>Professional Dashboard 👨‍💼</h1>
        <p>Manage your services and bookings</p>
      </div>

      {/* Stats */}
      <div style={statsGrid}>
        <div style={statCard}>
          <h2>₹{earnings}</h2>
          <p>Total Earnings</p>
        </div>

        <div style={statCard}>
          <h2>{clients}</h2>
          <p>Total Bookings</p>
        </div>
      </div>

      {/* Actions */}
      <h2 style={{ marginTop: "40px" }}>Manage</h2>

      <div style={manageGrid}>
        <div style={actionCard} onClick={() => navigate("/add-service")}>
          ➕ Add Service
        </div>

        <div style={actionCard} onClick={() => navigate("/edit-profile")}>
          ✏ Edit Profile
        </div>
      </div>

      {/* BOOKINGS */}
      <h2 style={{ marginTop: "40px" }}>My Bookings</h2>

      {bookings.length === 0 && <p>No bookings yet.</p>}

      {bookings.map((b, index) => (
        <div key={index} style={bookingCard}>
          <p><strong>Service:</strong> {b.service}</p>
          <p><strong>Price:</strong> ₹{b.price}</p>
          <p><strong>Date:</strong> {b.date}</p>
          <p><strong>Time:</strong> {b.time}</p>
          <p style={{ color: "#22c55e" }}>Hired ✅</p>
        </div>
      ))}
    </div>
  );
}

/* STYLES */

const notificationStyle = {
  background: "#22c55e",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "20px",
  textAlign: "center",
  fontWeight: "bold",
};

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
  padding: "20px",
  borderRadius: "12px",
  cursor: "pointer",
  textAlign: "center",
};

const bookingCard = {
  background: "rgba(255,255,255,0.15)",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "15px",
};

export default ProfessionalDashboard;