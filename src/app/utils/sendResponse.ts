import { Response } from 'express';
import httpStatus from 'http-status';

type TResponse<T> = {
  status?: boolean;
  statusCode: number;
  success: boolean;
  message: string;
  data: T | T[] | null;
};

const sendDataResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    statusCode: httpStatus.OK,
    data: data.data,
  });
};
const sendCreatedDataResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    statusCode: httpStatus.CREATED,
    data: data.data,
  });
};
const sendUpdateDataResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    statusCode: httpStatus.OK,
    data: data.data,
  });
};

export const sendResponse = {
  sendDataResponse,
  sendCreatedDataResponse,
  sendUpdateDataResponse,
};
