import { useParams } from "react-router-dom";
import { useState } from "react";

function ServiceDetails() {
  const { serviceName } = useParams();
  const decodedService = decodeURIComponent(serviceName);

  const [selectedPro, setSelectedPro] = useState(null);
  const [hiredList, setHiredList] = useState([]);

  const professionalsData = {
    "Web Development": [
      { name: "Rahul Sharma", exp: "5 Years Experience", rating: "4.8 ⭐", price: "₹500 / hour" },
      { name: "Ankit Verma", exp: "3 Years Experience", rating: "4.6 ⭐", price: "₹350 / hour" },
      { name: "Kiran Reddy", exp: "6 Years Experience", rating: "4.9 ⭐", price: "₹800 / hour" },
      { name: "Megha Joshi", exp: "4 Years Experience", rating: "4.7 ⭐", price: "₹400 / hour" },
      { name: "Sanjay Patel", exp: "7 Years Experience", rating: "4.9 ⭐", price: "₹8000 / hour" },
      { name: "Divya Nair", exp: "2 Years Experience", rating: "4.5 ⭐", price: "₹300 / hour" },
    ],

    "Graphic Designing": [
      { name: "Priya Verma", exp: "4 Years Experience", rating: "4.8 ⭐", price: "₹900 / hour" },
      { name: "Arjun Mehta", exp: "6 Years Experience", rating: "4.9 ⭐", price: "₹1300 / hour" },
      { name: "Sneha Kapoor", exp: "3 Years Experience", rating: "4.6 ⭐", price: "₹800 / hour" },
      { name: "Rohan Das", exp: "5 Years Experience", rating: "4.7 ⭐", price: "₹1100 / hour" },
      { name: "Ishita Rao", exp: "2 Years Experience", rating: "4.5 ⭐", price: "₹700 / hour" },
      { name: "Varun Singh", exp: "7 Years Experience", rating: "4.9 ⭐", price: "₹1500 / hour" },
    ],

    "Digital Marketing": [
      { name: "Aman Gupta", exp: "5 Years Experience", rating: "4.7 ⭐", price: "₹1400 / hour" },
      { name: "Neha Sharma", exp: "4 Years Experience", rating: "4.8 ⭐", price: "₹1200 / hour" },
      { name: "Vikram Rao", exp: "6 Years Experience", rating: "4.9 ⭐", price: "₹1800 / hour" },
      { name: "Pooja Mehra", exp: "3 Years Experience", rating: "4.6 ⭐", price: "₹1000 / hour" },
      { name: "Karthik Iyer", exp: "7 Years Experience", rating: "4.9 ⭐", price: "₹2000 / hour" },
      { name: "Ritika Jain", exp: "2 Years Experience", rating: "4.5 ⭐", price: "₹900 / hour" },
    ],

    "Photography": [
      { name: "Manish Yadav", exp: "6 Years Experience", rating: "4.9 ⭐", price: "₹5000 / event" },
      { name: "Tanya Singh", exp: "4 Years Experience", rating: "4.7 ⭐", price: "₹4000 / event" },
      { name: "Aditya Rao", exp: "5 Years Experience", rating: "4.8 ⭐", price: "₹4500 / event" },
      { name: "Nisha Kapoor", exp: "3 Years Experience", rating: "4.6 ⭐", price: "₹3500 / event" },
      { name: "Harsha Reddy", exp: "7 Years Experience", rating: "4.9 ⭐", price: "₹6000 / event" },
      { name: "Komal Verma", exp: "2 Years Experience", rating: "4.5 ⭐", price: "₹3000 / event" },
    ],

    "Content Writing": [
      { name: "Lavanya Rao", exp: "5 Years Experience", rating: "4.8 ⭐", price: "₹800 / article" },
      { name: "Rohit Menon", exp: "4 Years Experience", rating: "4.7 ⭐", price: "₹750 / article" },
      { name: "Snehal Gupta", exp: "3 Years Experience", rating: "4.6 ⭐", price: "₹600 / article" },
      { name: "Arpita Das", exp: "6 Years Experience", rating: "4.9 ⭐", price: "₹1000 / article" },
      { name: "Kunal Jain", exp: "7 Years Experience", rating: "4.9 ⭐", price: "₹1200 / article" },
      { name: "Bhavna Kapoor", exp: "2 Years Experience", rating: "4.5 ⭐", price: "₹500 / article" },
    ],

    "App Development": [
      { name: "Ritesh Kumar", exp: "5 Years Experience", rating: "4.8 ⭐", price: "₹2000 / hour" },
      { name: "Ananya Singh", exp: "4 Years Experience", rating: "4.7 ⭐", price: "₹1800 / hour" },
      { name: "Siddharth Rao", exp: "6 Years Experience", rating: "4.9 ⭐", price: "₹2500 / hour" },
      { name: "Mounika Reddy", exp: "3 Years Experience", rating: "4.6 ⭐", price: "₹1600 / hour" },
      { name: "Tarun Mehta", exp: "7 Years Experience", rating: "4.9 ⭐", price: "₹3000 / hour" },
      { name: "Isha Patel", exp: "2 Years Experience", rating: "4.5 ⭐", price: "₹1200 / hour" },
    ],

    "Video Editing": [
      { name: "Akash Verma", exp: "5 Years Experience", rating: "4.8 ⭐", price: "₹1500 / project" },
      { name: "Neeraj Singh", exp: "4 Years Experience", rating: "4.7 ⭐", price: "₹1200 / project" },
      { name: "Sonal Kapoor", exp: "3 Years Experience", rating: "4.6 ⭐", price: "₹1000 / project" },
      { name: "Pranav Reddy", exp: "6 Years Experience", rating: "4.9 ⭐", price: "₹2000 / project" },
      { name: "Divyanshi Jain", exp: "2 Years Experience", rating: "4.5 ⭐", price: "₹800 / project" },
      { name: "Harshit Gupta", exp: "7 Years Experience", rating: "4.9 ⭐", price: "₹2500 / project" },
    ],

    "Home Services": [
      { name: "Ramesh Kumar", exp: "8 Years Experience", rating: "4.8 ⭐", price: "₹700 / visit" },
      { name: "Suresh Patel", exp: "5 Years Experience", rating: "4.7 ⭐", price: "₹600 / visit" },
      { name: "Ganesh Rao", exp: "6 Years Experience", rating: "4.9 ⭐", price: "₹800 / visit" },
      { name: "Mahesh Singh", exp: "4 Years Experience", rating: "4.6 ⭐", price: "₹550 / visit" },
      { name: "Venkatesh Iyer", exp: "7 Years Experience", rating: "4.9 ⭐", price: "₹900 / visit" },
      { name: "Ajay Sharma", exp: "3 Years Experience", rating: "4.5 ⭐", price: "₹500 / visit" },
    ],
  };

  const professionals = professionalsData[decodedService] || [];

  const confirmHire = () => {
    setHiredList([...hiredList, selectedPro.name]);
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
                onClick={() => setSelectedPro(pro)}
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
            <p style={{ marginTop: "15px" }}>
              Do you really want to hire this professional?
            </p>

            <div style={{ marginTop: "20px" }}>
              <button style={confirmButton} onClick={confirmHire}>
                Yes, Hire
              </button>
              <button
                style={cancelButton}
                onClick={() => setSelectedPro(null)}
              >
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
  backdropFilter: "blur(10px)",
  color: "white",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
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