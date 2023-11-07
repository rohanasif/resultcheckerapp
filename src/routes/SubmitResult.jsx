import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { submitResult } from "../actions";
import { useNavigate, useParams } from "react-router-dom";

const SubmitResult = ({ marks }) => {
  const { rollNo } = useParams();
  const navigate = useNavigate();
  const [backBtn, setBackBtn] = useState(false);
  const dispatch = useDispatch();
  const subjects = [
    "English",
    "Mathematics",
    "Urdu",
    "Physics",
    "Chemistry",
    "Islamiat",
    "Pak Studies",
  ];
  const [marksInput, setMarksInput] = useState({ ...marks });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarksInput({ ...marksInput, [name]: value });
  };

  return (
    <div>
      <h1>ENTER MARKS AND SUBMIT</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(submitResult(rollNo, marksInput));
          setBackBtn(true);
        }}
      >
        {subjects.map((subject, i) => {
          return (
            <div key={i}>
              <Form.Group controlId={subject}>
                <Form.Label>{subject}:</Form.Label>
                <Form.Control
                  name={subject}
                  type="number"
                  placeholder={`Enter marks in ${subject}`}
                  value={marksInput[subject]} // Use marksInput for input value
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </div>
          );
        })}
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
