import { useState } from "react";

function AddService() {
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Service "${service}" added with price ₹${price}`);
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Add New Service</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Service Name"
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
        />

        <button style={buttonStyle}>Add Service</button>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "300px",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none",
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
};

export default AddService;