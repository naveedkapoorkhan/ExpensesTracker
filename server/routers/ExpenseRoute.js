import express from "express"
import { AddExpenses, GetExpenses ,DeleteExpenses, UpdateExpenses} from "../controllers/ExpensesController.js"
const router=express.Router()
router.post("/upload",AddExpenses)
router.get("/getExpenses",GetExpenses)
router.delete("/delete/:id",DeleteExpenses)
router.put("/update/:id",UpdateExpenses)
export default router
