import {
  ADMIN_LOGIN,
  ADD_STUDENT,
  SUBMIT_RESULT,
  LOGIN,
  UPDATE_MESSAGE,
} from "../constants";
const initialState = {
  admin: { password: "123" },
  students: [],
  message: { text: "" },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: { ...state.message, text: action.payload },
      };
    case ADMIN_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };

    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case SUBMIT_RESULT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.rollNo === action.payload.rollNo
            ? {
                ...student,
                subjects: action.payload.subjects,
              }
            : student
        ),
      };

    case LOGIN:
      return {};

    default:
      return state;
  }
};

export default rootReducer;
