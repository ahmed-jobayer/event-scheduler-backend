import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { OrderService } from "./event.service"

const createlEvent = catchAsync(async (req, res) => {

    // console.log(req.body);

    const result = await OrderService.createEventIntoDB(req.body)
    sendResponse.sendDataResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Event created successfully",
        data: result
    })
})

const getAllEvent = catchAsync(async (req, res) => {
    const result = await OrderService.getAllEventFromDB()
    sendResponse.sendDataResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Got all event successfully",
        data: result
    })
})

const updateEvent = catchAsync(async (req, res) => {
    const { id } = req.params
    // console.log("controller", id);
    const result = await OrderService.updateEventIntoDB(id)
    sendResponse.sendDataResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Event archived successfully",
        data: result
    })
})
const deleteEvent = catchAsync(async (req, res) => {
    const { id } = req.params
    // console.log("controller", id);
    const result = await OrderService.deleteEventFromDB(id)
    sendResponse.sendDataResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Event deleted successfully",
        data: result
    })
})

export const EventController = {
    createlEvent,
    getAllEvent,
    updateEvent,
    deleteEvent
}