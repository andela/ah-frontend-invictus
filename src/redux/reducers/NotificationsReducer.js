import { notificationTypes } from "../actions/types";

const initialState = {
  notificationsResponse: {
  }
};

export default (state = initialState, action) => {
  const actionType = action.type;
  switch (actionType) {
  case notificationTypes.NOTIFICATIONS:
    return {
      ...state,
      notificationsResponse: action.payload
    };
  default:
    return state;
  }
};
