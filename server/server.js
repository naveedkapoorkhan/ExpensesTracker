import express from "express"
import cors from "cors"
import addExpense from "./routers/ExpenseRoute.js"
const app=express()
app.use(cors())
app.use(express.json())
app.use("/expense",addExpense)
const Port=5000

app.listen(Port,()=>{
    console.log(`server is running on Port ${Port}`)
})


