import { Router } from "express";
import { EventController } from "./event.controller";

const router = Router()

router.post('/create-event',EventController.createlEvent)
router.get('/', EventController.getAllEvent)
router.put('/:id', EventController.updateEvent)

export const EventRoutes = router