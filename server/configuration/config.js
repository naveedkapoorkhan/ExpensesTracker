import dotenv from "dotenv"
dotenv.config()
 export const PORT=process.env.PORT || 5000
export const DB_URL=process.env.DB_URL
export const JWT_SECRET=process.env.JWT_SECRET
if (!DB_URL) {
    console.error("❌ ERROR: DB_URL is missing in .env file!");
}