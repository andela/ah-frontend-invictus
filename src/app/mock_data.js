export const data = {
  passRequest: {
    success: {
      user: {
        message: 'request_success'
      }
    },
    expect: [
      {
        payload: { message: "request_success" },
        type: "RESET_PASSWORD_SUCCESS" }
    ]
  }
};

export const erro = {
  response: {
    data: {
      errors: ['request_error']
    }
  }
};

export const erro2 = {
  response: {
    data: {
      message: 'request_error'
    }
  }
};
