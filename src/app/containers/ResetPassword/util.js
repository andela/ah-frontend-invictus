export const myComponentWillReceiveProps = nextProps => {
  let stateObj;
  if (nextProps.message) {
    stateObj = { message: nextProps.message };
  }
  if (nextProps.errors) {
    stateObj = { ...stateObj, errors: nextProps.errors };
  } else {
    stateObj = { ...stateObj, email: "" };
  }
  return stateObj;
};
