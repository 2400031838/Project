import { useNavigate } from "react-router-dom";
import homeImg from "../assets/home.jpg.jpeg";
import cirImg from "../assets/cir.jpg.jpeg";
import vidImg from "../assets/vid.jpg.jpeg";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ color: "white" }}>

      {/* SECTION 1 – IMAGE LAYOUT */}
      <section style={aboutSection}>

        {/* NEW TITLE ADDED */}
        <h1 style={heroTitle}>
          Welcome to ProHire 🚀
        </h1>

        <div style={topContainer}>

          {/* LEFT BIG IMAGE */}
          <div style={leftBox}>
            <img src={homeImg} alt="Home" style={bigImage} />
          </div>

          {/* RIGHT TWO IMAGES */}
          <div style={rightBox}>
            <img src={cirImg} alt="Circle" style={smallImage} />
            <img src={vidImg} alt="Video" style={smallImage} />
          </div>

        </div>
      </section>

      {/* SECTION 2 – FEATURES */}
      <section style={featuresSection}>
        <h2 style={{ marginBottom: "40px" }}>What We Offer</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>✔ Verified Professionals</h3>
            <p>Only admin-approved experts are allowed on the platform.</p>
          </div>

          <div style={cardStyle}>
            <h3>✔ Secure Booking</h3>
            <p>Transparent hiring with clear pricing and ratings.</p>
          </div>

          <div style={cardStyle}>
            <h3>✔ Dashboard System</h3>
            <p>Separate dashboards for Users, Professionals & Admins.</p>
          </div>

          <div style={cardStyle}>
            <h3>✔ Smart Admin Control</h3>
            <p>Admins can approve professionals and manage services.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – HOW IT WORKS */}
      <section style={howSection}>
        <h2 style={{ marginBottom: "30px" }}>How It Works</h2>

        <p style={paraStyle}>1️⃣ Register as a User or Professional</p>
        <p style={paraStyle}>2️⃣ Browse or publish services</p>
        <p style={paraStyle}>3️⃣ Hire professionals securely</p>
        <p style={paraStyle}>4️⃣ Manage bookings through dashboards</p>
      </section>

      {/* SECTION 4 – GET STARTED */}
      <section style={ctaSection}>
        <h2 style={{ fontSize: "32px" }}>
          Ready to Get Started?
        </h2>

        <p style={{ marginTop: "15px" }}>
          Join ProHire today and experience smart hiring.
        </p>

        <button
          style={buttonStyle}
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>
      </section>

    </div>
  );
}

/* ================= STYLES ================= */

const aboutSection = {
  minHeight: "100vh",
  padding: "120px 40px",
  background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  textAlign: "center",
};

const heroTitle = {
  fontSize: "42px",
  marginBottom: "60px",
};

const topContainer = {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

const leftBox = {
  flex: "1",
  minWidth: "300px",
};

const rightBox = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  minWidth: "250px",
};

const bigImage = {
  width: "100%",
  borderRadius: "12px",
  objectFit: "cover",
};

const smallImage = {
  width: "100%",
  height: "200px",
  borderRadius: "40px",
  objectFit: "cover",
};

const featuresSection = {
  padding: "100px 40px",
  background: "#0f172a",
  textAlign: "center",
};

const howSection = {
  padding: "100px 40px",
  background: "#1e293b",
  textAlign: "center",
};

const ctaSection = {
  padding: "120px 40px",
  background: "linear-gradient(135deg, #7c3aed, #9333ea)",
  textAlign: "center",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  padding: "30px",
  borderRadius: "12px",
  backdropFilter: "blur(8px)",
};

const paraStyle = {
  maxWidth: "800px",
  margin: "10px auto",
  opacity: 0.9,
  fontSize: "18px",
};

const buttonStyle = {
  marginTop: "25px",
  padding: "12px 30px",
  borderRadius: "8px",
  border: "none",
  background: "white",
  color: "#7c3aed",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "16px",
};

export default Home;