import { Request, Response } from "express";
import  httpStatus  from "http-status";
import { success } from "zod";


const notFound = (req:Request, res:Response) => {
return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api Not Found!!",
    error: ""
})
}


export default notFound