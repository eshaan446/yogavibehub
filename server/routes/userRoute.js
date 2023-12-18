import express from "express"
import { createBooking,getBookings, deleteUser } from "../controllers/userController.js"
const router=express.Router()
router.post("/addBooking",createBooking)
router.get('/bookings',getBookings)
router.post("/delete/:id",deleteUser)
export{router as userRoute}