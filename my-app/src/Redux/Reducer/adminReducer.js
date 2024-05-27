import { ActionTypes } from "../constants/action-types";

const initialState = {
  adminInfo: {
    token: localStorage.getItem("adminToken") || "",
  },
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_ADMIN:
      return {
        ...state,
        adminInfo: {
          ...state.adminInfo,
          token: payload,
        },
      };
    case ActionTypes.LOGOUT_ADMIN:
      localStorage.removeItem("adminToken");
      return {
        ...state,
        adminInfo: {
          ...state.adminInfo,
          token: "",
        },
      };
    default:
      return state;
  }
};
