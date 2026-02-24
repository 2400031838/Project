import { useState } from "react";

function EditProfile() {
  const [name, setName] = useState("John Doe");
  const [skill, setSkill] = useState("Web Development");

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Edit Profile</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSave} style={buttonStyle}>
          Save Changes
        </button>
      </div>
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

export default EditProfile;