// // import dotenv from "dotenv"
// // dotenv.config()
// // export const Expense_API_URL =process.env.Expense_API_URL
// // export const USER_API_URL =process.env.USER_API_URL 


// export const Expense_API_URL = process.env.REACT_APP_EXPENSE_API_URL;
// export const USER_API_URL = process.env.REACT_APP_USER_API_URL;

export const Expense_API_URL = import.meta.env.VITE_EXPENSE_API_URL;
export const USER_API_URL = import.meta.env.VITE_USER_API_URL;