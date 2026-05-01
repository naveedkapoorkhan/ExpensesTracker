import jwt from "jsonwebtoken";
const { verify } = jwt;

export const authMiddleware = (req, res, next) => {
    // 1. Get token from authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token Missing" });
    }

    // 2. Verify token
    verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }

        // 3. Attach the decoded payload (e.g., { id: "user123" }) to req.user
        req.user = decoded; 
        next();
    });
};