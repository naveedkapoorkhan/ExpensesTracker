import express from "express"
import { AddExpenses, GetExpenses } from "../controllers/ExpensesController.js"
const router=express.Router()
router.post("/upload",AddExpenses)
router.get("/getExpenses",GetExpenses)
export default router
