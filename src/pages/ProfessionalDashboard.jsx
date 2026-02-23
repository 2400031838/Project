import "../index.css";

function ProfessionalDashboard() {
  return (
    <div style={{ padding: "40px" }}>

      {/* Welcome Section */}
      <div style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "30px",
        borderRadius: "12px",
        marginBottom: "40px"
      }}>
        <h1>Professional Dashboard 👨‍💼</h1>
        <p style={{ marginTop: "10px" }}>
          Manage your services, track earnings, and grow your client base with ProHire.
        </p>
      </div>

      {/* Stats Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "40px"
      }}>
        <div className="zoom-hover" style={statCard}>
          <h2>₹12,500</h2>
          <p>Total Earnings</p>
        </div>

        <div className="zoom-hover" style={statCard}>
          <h2>8</h2>
          <p>Active Clients</p>
        </div>

        <div className="zoom-hover" style={statCard}>
          <h2>4.8 ⭐</h2>
          <p>Average Rating</p>
        </div>
      </div>

      {/* Service Management */}
      <h2 style={{ marginBottom: "20px" }}>Manage Services</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px"
      }}>
        <div className="zoom-hover" style={cardStyle}>
          <h3>Add New Service</h3>
          <p>Create and publish a new service offering.</p>
        </div>

        <div className="zoom-hover" style={cardStyle}>
          <h3>View Bookings</h3>
          <p>Check booking requests from clients.</p>
        </div>

        <div className="zoom-hover" style={cardStyle}>
          <h3>Edit Profile</h3>
          <p>Update your skills, pricing, and portfolio.</p>
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

export default ProfessionalDashboard;