import { useEffect, useState } from "react";

function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPros, setTotalPros] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    /* ================= BOOKINGS ================= */
    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setTotalBookings(bookings.length);

    /* ================= SAMPLE USERS ================= */
    const users = [
      { name: "Rahul", email: "rahul@gmail.com" },
      { name: "Sneha", email: "sneha@gmail.com" },
      { name: "Amit", email: "amit@gmail.com" },
    ];
    setTotalUsers(users.length);

    /* ================= PROFESSIONALS ================= */
    const proList = [
      { name: "Rahul Tech", service: "Web Development" },
      { name: "Manoj Kumar", service: "Electrician" },
      { name: "Ankit Sir", service: "Coding Tutor" },
      { name: "Ritika Arts", service: "Graphic Design" },
    ];

    setProfessionals(proList);
    setTotalPros(proList.length);
  }, []);

  const deleteProfessional = (name) => {
    const updated = professionals.filter((p) => p.name !== name);
    setProfessionals(updated);
    setTotalPros(updated.length);
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <div style={headerStyle}>
        <h1>Admin Dashboard 🛡</h1>
        <p>Manage users, professionals, services and bookings.</p>
      </div>

      {/* STATS */}
      <div style={statsGrid}>
        <div style={statCard}>
          <h2>{totalUsers}</h2>
          <p>Total Users</p>
        </div>

        <div style={statCard}>
          <h2>{totalPros}</h2>
          <p>Professionals</p>
        </div>

        <div style={statCard}>
          <h2>{totalBookings}</h2>
          <p>Total Bookings</p>
        </div>
      </div>

      {/* PROFESSIONAL MANAGEMENT */}
      <h2 style={{ marginTop: "40px" }}>Manage Professionals</h2>

      {professionals.map((pro, index) => (
        <div key={index} style={proCard}>
          <div>
            <strong>{pro.name}</strong>
            <p style={{ opacity: 0.8 }}>{pro.service}</p>
          </div>

          <button
            style={deleteButton}
            onClick={() => deleteProfessional(pro.name)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

/* STYLES */

const headerStyle = {
  background: "linear-gradient(135deg, #7c3aed, #9333ea)",
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

const proCard = {
  background: "rgba(255,255,255,0.15)",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const deleteButton = {
  padding: "8px 15px",
  backgroundColor: "#ef4444",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
};

export default AdminDashboard;