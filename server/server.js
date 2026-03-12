import { PORT } from "./configuration/config.js"
import express from "express"
 
import cors from "cors"
import addExpense from "./routers/ExpenseRoute.js"
import dbConnection from "./dbConfig/dbConnection.js"

const app=express()
app.use(cors())
app.use(express.json())
app.use("/expense",addExpense)

dbConnection()
app.listen(PORT,()=>{
    console.log(`server is running on Port ${PORT}`)
})














