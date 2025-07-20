import { Router } from "express";
import { EventController } from "./event.controller";

const router = Router()

router.post('/',EventController.createlEvent)
router.get('/', EventController.getAllEvent)
router.put('/:id', EventController.updateEvent)
router.delete('/:id', EventController.deleteEvent)

export const EventRoutes = router