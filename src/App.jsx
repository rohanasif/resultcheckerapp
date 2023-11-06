import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import DisplayResult from "./routes/DisplayResult";
import SubmitResult from "./routes/SubmitResult";
import Login from "./routes/Login";
import AddStudent from "./routes/AddStudent";
import AdminLogin from "./routes/AdminLogin";
const App = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/:rollno" element={<DisplayResult />} />
        <Route path="/submit" element={<SubmitResult />} />
        <Route path="/admin" element={<AddStudent />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};
export default App;
