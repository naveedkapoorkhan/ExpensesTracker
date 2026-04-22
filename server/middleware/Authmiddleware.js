import jwt from "jsonwebtoken"
const {verify}=jwt
export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.json({message:"token Missing"})
   verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.json({ message: "Invalid token" });
        req.user = decoded.id;
        next();
    }) 
    
        
   
}