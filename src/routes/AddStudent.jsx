import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addStudent } from "../actions";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  return (
    <div>
      <h1>Enter Student Details</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addStudent({ name, rollNo }));
          navigate(`/submit/${rollNo}`);
        }}
      >
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Roll No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Roll Number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Create</Button>
      </Form>
    </div>
  );
};
export default AddStudent;
