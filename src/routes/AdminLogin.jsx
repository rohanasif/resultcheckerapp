import { useEffect, useState } from "react";
import { adminLogin } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  let message = useSelector((state) => state.message.text);

  const dispatch = useDispatch();
  const [inp, setInp] = useState("");
  const [hidden, setHidden] = useState(true);
  const [interacted, setInteracted] = useState(false);
  const navigate = useNavigate();
  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate("/admin");
  };
  useEffect(() => {
    dispatch(adminLogin(inp, setHidden));
  }, [inp]);

  return (
    <div>
      <Form onSubmit={(e) => handleAdminLogin(e)}>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Enter Admin password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={inp}
            onChange={(e) => {
              setInteracted(true);
              setInp(e.target.value);
            }}
          />
        </Form.Group>
        {message && interacted ? (
          <p className="text-danger">{message}</p>
        ) : null}
        <Button variant="primary" type="submit" hidden={hidden}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default AdminLogin;
