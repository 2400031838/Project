import { useParams } from "react-router-dom";
import { useState } from "react";

function ServiceDetails() {
  const { serviceName } = useParams();
  const decodedService = decodeURIComponent(serviceName);

  const [selectedPro, setSelectedPro] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [hiredList, setHiredList] = useState([]);
  const [availabilityMsg, setAvailabilityMsg] = useState("");

  const professionalsData = {

    /* ================= TECHNICAL ================= */

    "Web Development": [
      { name: "Rahul Tech", exp: "3 Years", rating: "4.6 ⭐", price: "₹800 / project" },
      { name: "Sneha Code", exp: "2 Years", rating: "4.5 ⭐", price: "₹700 / project" },
    ],

    "Mobile App Development": [
      { name: "Kiran Apps", exp: "3 Years", rating: "4.7 ⭐", price: "₹900 / project" },
      { name: "Ananya Mobile", exp: "2 Years", rating: "4.4 ⭐", price: "₹750 / project" },
    ],

    "UI/UX Design": [
      { name: "Priya Design", exp: "3 Years", rating: "4.8 ⭐", price: "₹600 / project" },
      { name: "Rohan UI", exp: "2 Years", rating: "4.6 ⭐", price: "₹550 / project" },
    ],

    "Data Analysis": [
      { name: "Amit Analyst", exp: "4 Years", rating: "4.7 ⭐", price: "₹850 / project" },
      { name: "Divya Data", exp: "3 Years", rating: "4.6 ⭐", price: "₹750 / project" },
    ],

    "Software Testing": [
      { name: "Vikas QA", exp: "5 Years", rating: "4.8 ⭐", price: "₹700 / project" },
      { name: "Meera Tester", exp: "2 Years", rating: "4.5 ⭐", price: "₹600 / project" },
    ],

    "Cybersecurity Support": [
      { name: "Arjun Secure", exp: "4 Years", rating: "4.9 ⭐", price: "₹1000 / project" },
      { name: "Nisha Cyber", exp: "3 Years", rating: "4.7 ⭐", price: "₹900 / project" },
    ],

    /* ================= HOME ================= */

    "Electrician": [
      { name: "Manoj Kumar", exp: "6 Years", rating: "4.7 ⭐", price: "₹350 / visit" },
      { name: "Suresh Reddy", exp: "5 Years", rating: "4.6 ⭐", price: "₹300 / visit" },
    ],

    "Plumber": [
      { name: "Ravi Plumbing", exp: "7 Years", rating: "4.8 ⭐", price: "₹400 / visit" },
      { name: "Naresh Pipes", exp: "5 Years", rating: "4.6 ⭐", price: "₹350 / visit" },
    ],

    "Carpenter": [
      { name: "Harish Wood", exp: "6 Years", rating: "4.7 ⭐", price: "₹450 / work" },
      { name: "Rakesh Craft", exp: "4 Years", rating: "4.5 ⭐", price: "₹380 / work" },
    ],

    "House Cleaning": [
      { name: "CleanPro Services", exp: "5 Years", rating: "4.8 ⭐", price: "₹500 / visit" },
      { name: "FreshHome Team", exp: "3 Years", rating: "4.6 ⭐", price: "₹450 / visit" },
    ],

    "AC Repair": [
      { name: "CoolAir Tech", exp: "6 Years", rating: "4.7 ⭐", price: "₹600 / visit" },
      { name: "Smart Cooling", exp: "4 Years", rating: "4.6 ⭐", price: "₹550 / visit" },
    ],

    /* ================= ACADEMIC ================= */

    "Coding Tutor": [
      { name: "Ankit Sir", exp: "3 Years", rating: "4.9 ⭐", price: "₹500 / session" },
      { name: "Megha Mam", exp: "2 Years", rating: "4.7 ⭐", price: "₹450 / session" },
    ],

    "Project Guidance": [
      { name: "Arun Guide", exp: "5 Years", rating: "4.8 ⭐", price: "₹700 / project" },
      { name: "Priya Mentor", exp: "3 Years", rating: "4.6 ⭐", price: "₹650 / project" },
    ],

    "Exam Coaching": [
      { name: "Rakesh Sir", exp: "8 Years", rating: "4.9 ⭐", price: "₹600 / session" },
      { name: "Deepa Mam", exp: "5 Years", rating: "4.7 ⭐", price: "₹550 / session" },
    ],

    "Assignment Help": [
      { name: "StudyAssist Team", exp: "4 Years", rating: "4.8 ⭐", price: "₹400 / assignment" },
      { name: "EduPro Experts", exp: "3 Years", rating: "4.6 ⭐", price: "₹350 / assignment" },
    ],

    /* ================= CREATIVE ================= */

    "Graphic Design": [
      { name: "Ritika Arts", exp: "3 Years", rating: "4.8 ⭐", price: "₹500 / design" },
      { name: "Aditya Design", exp: "4 Years", rating: "4.7 ⭐", price: "₹600 / design" },
    ],

    "Video Editing": [
      { name: "Rohan Editz", exp: "3 Years", rating: "4.7 ⭐", price: "₹700 / video" },
      { name: "Aisha Studio", exp: "2 Years", rating: "4.5 ⭐", price: "₹650 / video" },
    ],

    "Content Writing": [
      { name: "Kavya Writes", exp: "4 Years", rating: "4.8 ⭐", price: "₹400 / article" },
      { name: "ContentPro Team", exp: "3 Years", rating: "4.6 ⭐", price: "₹350 / article" },
    ],

    "Photography": [
      { name: "LensMaster Raj", exp: "5 Years", rating: "4.9 ⭐", price: "₹1200 / event" },
      { name: "SnapShot Studio", exp: "4 Years", rating: "4.7 ⭐", price: "₹1000 / event" },
    ],

    /* ================= PROFESSIONAL ================= */

    "Resume Building": [
      { name: "CareerPro Raj", exp: "5 Years", rating: "4.9 ⭐", price: "₹400 / resume" },
      { name: "Shalini HR", exp: "4 Years", rating: "4.7 ⭐", price: "₹350 / resume" },
    ],

    "Digital Marketing": [
      { name: "MarketBoost Team", exp: "6 Years", rating: "4.8 ⭐", price: "₹900 / campaign" },
      { name: "SEO Experts", exp: "4 Years", rating: "4.6 ⭐", price: "₹750 / campaign" },
    ],

    "Business Consulting": [
      { name: "Vivek Advisor", exp: "6 Years", rating: "4.8 ⭐", price: "₹900 / session" },
      { name: "Aman Strategy", exp: "5 Years", rating: "4.7 ⭐", price: "₹850 / session" },
    ],
  };

  const professionals = professionalsData[decodedService] || [];

  const confirmHire = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select date and time");
      return;
    }

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const conflict = existingBookings.find(
      (b) =>
        b.name === selectedPro.name &&
        b.date === selectedDate &&
        b.time === selectedTime
    );

    if (conflict) {
      setAvailabilityMsg("❌ Not Available. Select another time.");
      return;
    }

    const newBooking = {
      name: selectedPro.name,
      service: decodedService,
      price: selectedPro.price,
      date: selectedDate,
      time: selectedTime,
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, newBooking])
    );

    setHiredList([...hiredList, selectedPro.name]);
    setAvailabilityMsg("✅ Successfully Hired!");
    setSelectedPro(null);
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1 style={{ marginBottom: "30px" }}>
        {decodedService} Professionals
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px",
      }}>
        {professionals.map((pro, index) => (
          <div key={index} style={cardStyle}>
            <h3>{pro.name}</h3>
            <p>{pro.exp}</p>
            <p>{pro.rating}</p>
            <p style={priceStyle}>💰 {pro.price}</p>

            {hiredList.includes(pro.name) ? (
              <div style={hiredBadge}>✅ Hired</div>
            ) : (
              <button
                style={buttonStyle}
                onClick={() => {
                  setSelectedPro(pro);
                  setAvailabilityMsg("");
                }}
              >
                Hire
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedPro && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <h2>Confirm Hiring</h2>
            <p><strong>Name:</strong> {selectedPro.name}</p>
            <p><strong>Experience:</strong> {selectedPro.exp}</p>
            <p><strong>Rating:</strong> {selectedPro.rating}</p>
            <p><strong>Price:</strong> {selectedPro.price}</p>

            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} style={inputStyle}/>
            <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} style={inputStyle}/>

            {availabilityMsg && (
              <p style={{
                marginTop: "10px",
                color: availabilityMsg.includes("Successfully") ? "#22c55e" : "red",
                fontWeight: "bold",
              }}>
                {availabilityMsg}
              </p>
            )}

            <div style={{ marginTop: "20px" }}>
              <button style={confirmButton} onClick={confirmHire}>
                Yes, Hire
              </button>
              <button style={cancelButton} onClick={() => setSelectedPro(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Styles */

const cardStyle = {
  padding: "25px",
  background: "rgba(255,255,255,0.15)",
  borderRadius: "14px",
};

const priceStyle = {
  marginTop: "8px",
  fontWeight: "600",
  color: "#93c5fd",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px 18px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(90deg, #3b82f6, #6366f1)",
  color: "white",
  cursor: "pointer",
};

const hiredBadge = {
  marginTop: "15px",
  padding: "10px",
  backgroundColor: "#22c55e",
  borderRadius: "8px",
  textAlign: "center",
  fontWeight: "bold",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalBox = {
  backgroundColor: "#1e293b",
  padding: "30px",
  borderRadius: "12px",
  width: "350px",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "none",
};

const confirmButton = {
  padding: "10px 15px",
  marginRight: "10px",
  backgroundColor: "#22c55e",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
};

const cancelButton = {
  padding: "10px 15px",
  backgroundColor: "#ef4444",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
};

export default ServiceDetails;