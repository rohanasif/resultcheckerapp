import axios from "axios";
import {
  STUDENTS_URL,
  ADMIN_URL,
  ADMIN_LOGIN,
  UPDATE_MESSAGE,
  ADD_STUDENT,
  SUBMIT_RESULT,
  LOGIN,
} from "../constants";

export const adminLogin = (input, setHidden) => async (dispatch) => {
  try {
    const response = await axios.get(ADMIN_URL);
    const adminpassword = response.data.password;
    if (input === adminpassword) {
      dispatch({ type: UPDATE_MESSAGE, payload: "" });
      dispatch({ type: ADMIN_LOGIN });
      setHidden(false);
    } else {
      dispatch({ type: UPDATE_MESSAGE, payload: "Wrong password!" });
      setHidden(true);
    }
  } catch (e) {
    console.error(e);
  }
};

export const getStudents = () => async () => {
  try {
    const response = await axios.get(STUDENTS_URL);
    const students = response.data;
    return students;
  } catch (e) {
    console.error(e);
  }
};

export const selectStudent = (rollNo) => async (dispatch) => {
  try {
    const students = await dispatch(getStudents());
    const selectedStudent = students.find(
      (student) => student.rollNo === rollNo
    );
    const id = selectedStudent.id;
    const response = await axios.get(`${STUDENTS_URL}/${id}`);
    const student = response.data;
    return student;
  } catch (e) {
    console.error(e);
  }
};

export const getResult = (rollNo) => async (dispatch) => {
  try {
    const student = await dispatch(selectStudent(rollNo));
    const result = student.marks;
    return result;
  } catch (e) {
    console.error(e);
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    const response = await axios.post(STUDENTS_URL, student);
    const addedStudent = response.data;
    dispatch({ type: ADD_STUDENT, payload: addedStudent });
  } catch (e) {
    console.error(e);
  }
};

export const submitResult = (rollNo, marks) => async (dispatch) => {
  try {
    const student = await dispatch(selectStudent(rollNo));
    const studentResponse = await axios.patch(`${STUDENTS_URL}/${student.id}`, {
      marks,
    });
    const updatedStudent = studentResponse.data;
    dispatch({ type: SUBMIT_RESULT, payload: updatedStudent });
  } catch (e) {
    console.error(e);
  }
};

export const login = (rollNo) => async (dispatch) => {
  try {
    const student = await dispatch(selectStudent(rollNo));
    dispatch({ type: LOGIN, payload: student });
  } catch (e) {
    console.error(e);
  }
};
