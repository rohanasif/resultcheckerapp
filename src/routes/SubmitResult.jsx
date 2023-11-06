import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { submitResult } from "../actions";
import { useNavigate, useParams } from "react-router-dom";
const SubmitResult = () => {
  const { rollNo } = useParams();
  const navigate = useNavigate();
  const [backBtn, setBackBtn] = useState(false);
  const dispatch = useDispatch();
  const [marks, setMarks] = useState({
    English: "",
    Mathematics: "",
    Urdu: "",
    Physics: "",
    Chemistry: "",
    Islamiat: "",
    "Pak Studies": "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarks({ ...marks, [name]: value });
  };
  return (
    <div>
      <h1>ENTER MARKS AND SUBMIT</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(submitResult(rollNo, marks));
          setBackBtn(true);
        }}
      >
        <Form.Group controlId="subject-1">
          <Form.Label>ENGLISH: </Form.Label>
          <Form.Control
            name="English"
            type="number"
            placeholder="Enter marks in English"
            value={marks.English}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="subject-2">
          <Form.Label>MATHEMATICS: </Form.Label>
          <Form.Control
            name="Mathematics"
            type="number"
            placeholder="Enter marks in Mathematics"
            value={marks.Mathematics}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="subject-3">
          <Form.Label>URDU: </Form.Label>
          <Form.Control
            name="Urdu"
            type="number"
            placeholder="Enter marks in Urdu"
            value={marks.Urdu}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="subject-4">
          <Form.Label>PHYSICS: </Form.Label>
          <Form.Control
            name="Physics"
            type="number"
            placeholder="Enter marks in Physics"
            value={marks.Physics}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="subject-5">
          <Form.Label>CHEMISTRY: </Form.Label>
          <Form.Control
            name="Chemistry"
            type="number"
            placeholder="Enter marks in Chemistry"
            value={marks.Chemistry}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="subject-6">
          <Form.Label>ISLAMIAT: </Form.Label>
          <Form.Control
            name="Islamiat"
            type="number"
            placeholder="Enter marks in Islamiat"
            value={marks.Islamiat}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="subject-7">
          <Form.Label>PAK STUDIES: </Form.Label>
          <Form.Control
            name="Pak Studies"
            type="number"
            placeholder="Enter marks in Pak Studies"
            value={marks["Pak Studies"]}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        {backBtn ? (
          <div>
            <Button onClick={() => navigate("/admin")}>Add another</Button>
            <Button onClick={() => navigate(`/student/${rollNo}`)}>
              View as Student
            </Button>
          </div>
        ) : null}
        <Button type="submit">Submit Marks</Button>
      </Form>
    </div>
  );
};
export default SubmitResult;
