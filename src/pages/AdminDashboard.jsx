//Admin Dashboard.jsx
import { useEffect, useState } from "react";
import "../index.css";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [pros, setPros] = useState([]);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const storedPros =
      JSON.parse(localStorage.getItem("professionals")) || [];

    const storedServices =
      JSON.parse(localStorage.getItem("services")) || [];

    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setUsers(storedUsers);
    setPros(storedPros);
    setServices(storedServices);
    setBookings(storedBookings);
  }, []);

  // Delete User
  const handleDeleteUser = (index) => {
    const updated = [...users];
    updated.splice(index, 1);

    localStorage.setItem("users", JSON.stringify(updated));
    setUsers(updated);
  };

  // Approve Professional
  const handleApprovePro = (index) => {
    const updated = [...pros];
    updated[index].status = "Approved";

    localStorage.setItem("professionals", JSON.stringify(updated));
    setPros(updated);
  };

  // Delete Service
  const handleDeleteService = (index) => {
    const updated = [...services];
    updated.splice(index, 1);

    localStorage.setItem("services", JSON.stringify(updated));
    setServices(updated);
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>

      {/* Header */}
      <div style={headerStyle}>
        <h1>Admin Dashboard 🛡️</h1>
        <p>Manage users, professionals, services and bookings.</p>
      </div>

      {/* Stats */}
      <div style={statsGrid}>
        <div style={statCard}>
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>

        <div style={statCard}>
          <h2>{pros.length}</h2>
          <p>Professionals</p>
        </div>

        <div style={statCard}>
          <h2>{bookings.length}</h2>
          <p>Total Bookings</p>
        </div>
      </div>

      {/* Manage Users */}
      <h2 style={{ marginTop: "50px" }}>Manage Users</h2>

      {users.length === 0 && <p>No users found.</p>}

      {users.map((user, index) => (
        <div key={index} style={cardStyle}>
          <p>{user.email || user.name}</p>
          <button
            onClick={() => handleDeleteUser(index)}
            style={deleteBtn}
          >
            Delete
          </button>
        </div>
      ))}

      {/* Approve Professionals */}
      <h2 style={{ marginTop: "50px" }}>Approve Professionals</h2>

      {pros.length === 0 && <p>No professionals found.</p>}

      {pros.map((pro, index) => (
        <div key={index} style={cardStyle}>
          <p>
            {pro.name} -{" "}
            <span
              style={{
                color:
                  pro.status === "Approved"
                    ? "#22c55e"
                    : "#facc15",
              }}
            >
              {pro.status || "Pending"}
            </span>
          </p>

          {pro.status !== "Approved" && (
            <button
              onClick={() => handleApprovePro(index)}
              style={approveBtn}
            >
              Approve
            </button>
          )}
        </div>
      ))}

      {/* Manage Services */}
      <h2 style={{ marginTop: "50px" }}>Manage Services</h2>

      {services.length === 0 && <p>No services found.</p>}

      {services.map((service, index) => (
        <div key={index} style={cardStyle}>
          <p>{service.name || service}</p>
          <button
            onClick={() => handleDeleteService(index)}
            style={deleteBtn}
          >
            Remove
          </button>
        </div>
      ))}

    </div>
  );
}

/* Styles */

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

const cardStyle = {
  background: "rgba(255,255,255,0.15)",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

const approveBtn = {
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

export default AdminDashboard;