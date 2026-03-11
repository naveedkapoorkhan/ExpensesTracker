import express from "express"
import { AddExpenses, GetExpenses ,DeleteExpenses} from "../controllers/ExpensesController.js"
const router=express.Router()
router.post("/upload",AddExpenses)
router.get("/getExpenses",GetExpenses)
router.delete("/delete/:id",DeleteExpenses)
export default router
