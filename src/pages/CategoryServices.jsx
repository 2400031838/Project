import { useParams, useNavigate } from "react-router-dom";

function CategoryServices() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const services = {
    Technical: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Data Analysis",
      "Software Testing",
      "Cybersecurity Support",
    ],

    Home: [
      "Electrician",
      "Plumber",
      "Carpenter",
      "House Cleaning",
      "AC Repair",
    ],

    Academic: [
      "Coding Tutor",
      "Project Guidance",
      "Exam Coaching",
      "Assignment Help",
    ],

    Creative: [
      "Graphic Design",
      "Video Editing",
      "Content Writing",
      "Photography",
    ],

    Professional: [
      "Resume Building",
      "Digital Marketing",
      "Business Consulting",
    ],
  };

  const selectedServices = services[categoryName] || [];

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>{categoryName} Services</h1>

      <div style={gridStyle}>
        {selectedServices.map((service, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() =>
              navigate(`/service/${encodeURIComponent(service)}`)
            }
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Styles */

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
  marginTop: "40px",
};

const cardStyle = {
  padding: "25px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "12px",
  cursor: "pointer",
  textAlign: "center",
};

export default CategoryServices;
