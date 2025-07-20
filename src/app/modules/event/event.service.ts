import { Event } from "./event.model"

const getAllEventFromDB = async () => {
    const result = await Event.find().sort({date:1, time:1})
    return result
}

export const OrderService = {
    getAllEventFromDB
}