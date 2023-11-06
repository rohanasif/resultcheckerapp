import axios from "axios";
import {
  ADMIN_LOGIN,
  ADMIN_URL,
  STUDENTS_URL,
  SUBJECTS_URL,
  UPDATE_MESSAGE,
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

export const createStudent = () => async (dispatch) => {};

export const createResult = () => async (dispatch) => {};

export const getResult = () => async (dispatch) => {};

export const updateResult = () => async (dispatch) => {};

export const submitResult = () => async (dispatch) => {};
