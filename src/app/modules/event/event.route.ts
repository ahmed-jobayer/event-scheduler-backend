import { Router } from "express";
import { EventController } from "./event.controller";

const router = Router()


router.get('/', EventController.getAllEvent)

export const EventRoutes = router