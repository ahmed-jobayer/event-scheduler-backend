import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { OrderService } from "./event.service"

const getAllEvent = catchAsync(async (req, res) => {
    const result = await OrderService.getAllEventFromDB()
    sendResponse.sendDataResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Got all event successfully",
        data: result
    })
})

export const EventController = {
    getAllEvent
}