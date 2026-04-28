import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL =
  "https://professional-hire-backend-production.up.railway.app";

function ServiceDetails() {
  const { serviceName } = useParams();
  const decodedService = decodeURIComponent(serviceName);

  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/services/subcategory/${decodedService}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, [decodedService]);

  const handleBooking = async () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    const bookingData = {
      name: selected.name,
      service: decodedService,
      price: selected.price,
      date,
      time,
      professionalEmail: selected.email
    };

    try {
      const res = await fetch(`${BASE_URL}/booking/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      });

      if (res.ok) {
        alert("Booked Successfully ✅");
        setSelected(null);
        setDate("");
        setTime("");
      } else {
        alert("Booking failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>{decodedService} Services</h1>

      {services.length === 0 ? (
        <p>No professionals available.</p>
      ) : (
        <div style={grid}>
          {services.map((s) => (
            <div key={s.id} style={card}>
              <h3>{s.name}</h3>
              <p>₹{s.price}</p>

              <button
                style={btn}
                onClick={() => setSelected(s)}
              >
                Hire
              </button>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div style={overlay}>
          <div style={modal}>
            <h2>Confirm Booking</h2>

            <p>
              <strong>{selected.name}</strong>
            </p>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <br /><br />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <br /><br />

            <button
              onClick={handleBooking}
              style={confirm}
            >
              Confirm
            </button>

            <button
              onClick={() => setSelected(null)}
              style={cancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};

const card = {
  padding: "20px",
  background: "rgba(255,255,255,0.15)",
  borderRadius: "10px"
};

const btn = {
  marginTop: "10px",
  padding: "10px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px"
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modal = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px"
};

const confirm = {
  background: "green",
  color: "white",
  marginRight: "10px",
  padding: "8px",
  border: "none"
};

const cancel = {
  background: "red",
  color: "white",
  padding: "8px",
  border: "none"
};

export default ServiceDetails;