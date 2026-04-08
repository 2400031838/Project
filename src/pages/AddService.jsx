import { useState } from "react";

const categories = {
  Technical: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Data Analysis",
    "Software Testing",
    "Cybersecurity Support"
  ],
  Creative: [
    "Graphic Design",
    "Video Editing",
    "Content Writing",
    "Photography"
  ],
  Home: [
    "Electrician",
    "Plumber",
    "Carpenter",
    "House Cleaning",
    "AC Repair"
  ],
  Professional: [
    "Resume Building",
    "Digital Marketing",
    "Business Consulting"
  ]
};

function AddService() {
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user")); // ✅ professional

    const serviceData = {
      mainCategory,
      subCategory,
      name: service,
      price,
      email: user.email // 🔥 IMPORTANT FIX
    };

    try {
      const res = await fetch("http://localhost:8080/services/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(serviceData)
      });

      if (res.ok) {
        alert("Service added successfully ✅");

        // reset
        setMainCategory("");
        setSubCategory("");
        setService("");
        setPrice("");
      } else {
        alert("Error adding service ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Add New Service</h1>

      <form onSubmit={handleSubmit}>

        {/* ✅ CATEGORY DROPDOWN */}
        <select
          value={mainCategory}
          onChange={(e) => {
            setMainCategory(e.target.value);
            setSubCategory(""); // reset subcategory
          }}
          style={input}
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* ✅ SUBCATEGORY DROPDOWN */}
        {mainCategory && (
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            style={input}
          >
            <option value="">Select Subcategory</option>
            {categories[mainCategory].map((sub) => (
              <option key={sub}>{sub}</option>
            ))}
          </select>
        )}

        {/* SERVICE NAME */}
        <input
          type="text"
          placeholder="Service Name"
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={input}
        />

        {/* PRICE */}
        <input
          type="text"
          placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={input}
        />

        <button style={btn}>Add Service</button>
      </form>
    </div>
  );
}

/* STYLES */

const input = {
  display: "block",
  marginBottom: "15px",
  padding: "10px",
  width: "300px",
  borderRadius: "8px",
  border: "none"
};

const btn = {
  padding: "10px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px"
};

export default AddService;