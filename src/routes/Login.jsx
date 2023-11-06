import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/student/${rollNo}`);
  };
  const [rollNo, setRollNo] = useState("");
  return (
    <div>
      <h1>STUDENT LOGIN</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="rollNo">
          <Form.Label>Roll No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Roll Number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Get Result</Button>
      </Form>
    </div>
  );
};
export default Login;
