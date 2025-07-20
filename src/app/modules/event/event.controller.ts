import { OrderService } from "./event.service"

const getAllEvent = async () => {
    const result = await OrderService.getAllEventFromDB()
}

export const EventController = {
    getAllEvent
}