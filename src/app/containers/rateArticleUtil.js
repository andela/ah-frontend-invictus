import { toast } from 'react-toastify';

const moreError = error => {
  if (error.error) {
    if (error.error !== 'Rating for article doesnot exists') {
      toast.error(error.error, 'error', 5000);
    }
  }
};

export const handleErrors = (err) => {
  if (err.response !== undefined) {
    const error = err.response.data;
    if (error.detail) {toast.error(error.detail, 'error', 5000);}
    moreError(error);
  }
};

