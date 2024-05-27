import { ActionTypes } from "../constants/action-types";

export const setLoginAdmin = (token) => {
  localStorage.setItem("adminToken", token);
  return {
    type: ActionTypes.LOGIN_ADMIN,
    payload: token,
  };
};

export const setLogoutAdmin = () => {
  return {
    type: ActionTypes.LOGOUT_ADMIN,
  };
};

// export const setUpdateAdminPassword = (newPassword) => {
//   return {
//     type: ActionTypes.UPDATE_ADMIN_PASSWORD,
//     payload: newPassword,
//   };
// };
