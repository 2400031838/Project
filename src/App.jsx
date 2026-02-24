import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SupportDashboard from "./pages/SupportDashboard";
import Search from "./pages/Search";
import MyBookings from "./pages/MyBookings";
import ServiceDetails from "./pages/ServiceDetails";

/* ✅ ADD THESE IMPORTS */
import AddService from "./pages/AddService";
import ViewBookings from "./pages/ViewBookings";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/support-dashboard" element={<SupportDashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/service/:serviceName" element={<ServiceDetails />} />

          {/* ✅ ADD THESE ROUTES */}
          <Route path="/add-service" element={<AddService />} />
          <Route path="/view-bookings" element={<ViewBookings />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;