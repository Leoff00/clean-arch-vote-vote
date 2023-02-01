import { Request, Response, NextFunction } from "express";

interface ErrorProps extends Error {
  statusCode?: number;
  message: string;
}
export const errorHandlerMiddleware = async (
  error: ErrorProps,
  req: Request,
  response: Response,
  next: NextFunction
) => {
  if (error && error.statusCode) {
    const hasStatus = error.statusCode ?? 500;
    const hasMessage = error.statusCode
      ? error.message
      : "Something went wrong, Internal Server Error.";
    return response.status(hasStatus).json({
      statusCode: hasStatus,
      message: hasMessage,
    });
  } else {
    console.log(error);
  }
  next();
};
