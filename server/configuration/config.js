import dotenv from "dotenv"
dotenv.config()
 export const PORT=process.env.PORT
export const DB_URL=process.env.DB_URL

if (!DB_URL) {
    console.error("❌ ERROR: DB_URL is missing in .env file!");
}