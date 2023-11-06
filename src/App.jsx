import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ViewResult from "./routes/ViewResult";
import SubmitResult from "./routes/SubmitResult";
import Login from "./routes/Login";
import AddStudent from "./routes/AddStudent";
import AdminLogin from "./routes/AdminLogin";
const App = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AddStudent />} />
        <Route path="/submit/:rollNo" element={<SubmitResult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/:rollNo" element={<ViewResult />} />
      </Routes>
    </div>
  );
};
export default App;
