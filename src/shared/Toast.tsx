import { CheckCircle, Error } from '@mui/icons-material';
import { toast } from 'react-toastify';

export const successToast = (message: string) => {
  return toast(message, {
    type: 'success',
    icon: <CheckCircle className="text-green" />,
  });
};

export const errorToast = (message: string) => {
  return toast(message, {
    type: 'error',
    icon: <Error className="text-darkRed" />,
  });
};
