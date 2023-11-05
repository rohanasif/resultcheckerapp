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
            navigate("/admin");
          }}
        >
          Admin Panel
        </Button>
        <Button onClick={() => navigate("/student/:id")}>Result Check</Button>
      </div>
    </div>
  );
};
export default Home;
