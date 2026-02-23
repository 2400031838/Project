import "../index.css";

function AdminDashboard() {
  return (
    <div style={{ padding: "40px" }}>

      {/* Welcome Section */}
      <div style={{
        backgroundColor: "#7c3aed",
        color: "white",
        padding: "30px",
        borderRadius: "12px",
        marginBottom: "40px"
      }}>
        <h1>Admin Dashboard 🛡️</h1>
        <p style={{ marginTop: "10px" }}>
          Manage users, monitor services, and control the ProHire platform.
        </p>
      </div>

      {/* Platform Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "40px"
      }}>
        <div className="zoom-hover" style={statCard}>
          <h2>120</h2>
          <p>Total Users</p>
        </div>

        <div className="zoom-hover" style={statCard}>
          <h2>45</h2>
          <p>Professionals</p>
        </div>

        <div className="zoom-hover" style={statCard}>
          <h2>320</h2>
          <p>Total Bookings</p>
        </div>
      </div>

      {/* Admin Controls */}
      <h2 style={{ marginBottom: "20px" }}>Admin Controls</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px"
      }}>
        <div className="zoom-hover" style={cardStyle}>
          <h3>Manage Users</h3>
          <p>View, block, or remove user accounts.</p>
        </div>

        <div className="zoom-hover" style={cardStyle}>
          <h3>Approve Professionals</h3>
          <p>Verify and approve new professional registrations.</p>
        </div>

        <div className="zoom-hover" style={cardStyle}>
          <h3>Manage Services</h3>
          <p>Edit or remove service listings.</p>
        </div>
      </div>

    </div>
  );
}

const statCard = {
  padding: "25px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  textAlign: "center",
  cursor: "pointer"
};

const cardStyle = {
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  cursor: "pointer"
};

export default AdminDashboard;