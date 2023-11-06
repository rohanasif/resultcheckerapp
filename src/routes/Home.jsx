import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>RESULT CHECKING</h1>
      <div className="d-flex justify-content-around">
        <Button
          onClick={() => {
            navigate("/adminlogin");
          }}
        >
          Admin Panel
        </Button>
        <Button onClick={() => navigate("/login")}>Check Result</Button>
      </div>
    </div>
  );
};
export default Home;
