import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Error } from '@mui/icons-material';

import { IErrorResponse } from '../interfaces';

const ErrorMiddleWare: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error: IErrorResponse = action.payload as IErrorResponse;
    toast(error.data.error, {
      type: 'error',
      icon: <Error className="text-darkRed" />,
    });
  }
  return next(action);
};

export default ErrorMiddleWare;
