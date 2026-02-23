import "../index.css";

function SupportDashboard() {
  return (
    <div style={{ padding: "40px" }}>

      {/* Welcome Section */}
      <div style={{
        backgroundColor: "#0ea5e9",
        color: "white",
        padding: "30px",
        borderRadius: "12px",
        marginBottom: "40px"
      }}>
        <h1>Customer Support Dashboard 🎧</h1>
        <p style={{ marginTop: "10px" }}>
          Assist users, resolve issues, and ensure smooth platform experience.
        </p>
      </div>

      {/* Ticket Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "40px"
      }}>
        <div className="zoom-hover" style={statCard}>
          <h2>12</h2>
          <p>Open Tickets</p>
        </div>

        <div className="zoom-hover" style={statCard}>
          <h2>35</h2>
          <p>Resolved Issues</p>
        </div>

        <div className="zoom-hover" style={statCard}>
          <h2>4</h2>
          <p>Pending Reviews</p>
        </div>
      </div>

      {/* Support Actions */}
      <h2 style={{ marginBottom: "20px" }}>Support Actions</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px"
      }}>
        <div className="zoom-hover" style={cardStyle}>
          <h3>View Tickets</h3>
          <p>Check and respond to user complaints.</p>
        </div>

        <div className="zoom-hover" style={cardStyle}>
          <h3>Chat with Users</h3>
          <p>Provide live assistance to platform users.</p>
        </div>

        <div className="zoom-hover" style={cardStyle}>
          <h3>Escalate Issues</h3>
          <p>Forward critical issues to admin for action.</p>
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

export default SupportDashboard;