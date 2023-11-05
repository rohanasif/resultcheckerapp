import {
  ADMIN_LOGIN,
  CREATE_STUDENT,
  CREATE_RESULT,
  UPDATE_RESULT,
  SUBMIT_RESULT,
  LOGIN,
  GET_RESULT,
} from "../constant";
const initialState = {
  admin: { password: "123" },
  students: [],
  subjects: [
    "MATHS",
    "PHYSICS",
    "CHEMISTRY",
    "URDU",
    "ENGLISH",
    "ISLAMIAT",
    "PAK STUDIES",
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        ...state,
      };

    case CREATE_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case CREATE_RESULT:
      return {
        ...state,
        students: [
          state.students.map((student) =>
            student.rollNo === action.payload.rollNo
              ? { ...student, subjects: state.subjects }
              : student
          ),
        ],
      };

    case UPDATE_RESULT:
      return {
        ...state,
        students: [
          state.students.map((student) =>
            student.rollNo === action.payload.rollNo
              ? { ...student, subjects: action.payload.subjects }
              : student
          ),
        ],
      };

    case SUBMIT_RESULT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.rollNo === action.payload.rollNo
            ? {
                ...student,
                subjects: state.subjects.map((subject) => ({
                  ...subject,
                  [action.payload.subject]: action.payload.marks,
                })),
              }
            : student
        ),
      };

    case LOGIN:
      return {};

    case GET_RESULT:
      return {};

    default:
      return state;
  }
};

export default rootReducer;
