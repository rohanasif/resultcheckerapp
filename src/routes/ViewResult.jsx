import { useNavigate, useParams } from "react-router-dom";
import { getResult } from "../actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ViewResult = () => {
  const dispatch = useDispatch();
  const { rollNo } = useParams();
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResult = await dispatch(getResult(rollNo));
        setResult(studentResult);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch, rollNo]);

  return (
    <div>
      <h1>View Result</h1>
      {result !== null && (
        <div>
          <ul>
            {Object.keys(result).map((subject, index) => (
              <li key={index}>
                <strong>{subject}:</strong> {result[subject]}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Button onClick={() => navigate("/")}>Go back</Button>
    </div>
  );
};

export default ViewResult;
