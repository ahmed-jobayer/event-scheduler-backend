import { Event } from "./event.model"

const getAllEventFromDB = async () => {
    const result = await Event.find()
}

export const OrderService = {
    getAllEventFromDB
}