import express from "express"
import {authMiddleware} from "../middleware/Authmiddleware.js"
import { AddExpenses, GetExpenses ,DeleteExpenses, UpdateExpenses} from "../controllers/ExpensesController.js"
const router=express.Router()
router.post("/upload",authMiddleware,AddExpenses)
router.get("/getExpenses",authMiddleware,GetExpenses)
router.delete("/delete/:id",authMiddleware,DeleteExpenses)
router.put("/update/:id",authMiddleware,UpdateExpenses)
export default router
