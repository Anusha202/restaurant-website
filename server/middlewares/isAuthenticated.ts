import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            id: string;
        }
    }
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload; // Use "decoded" instead of "decode" for clarity

        if (!decoded || !decoded.userId) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

        req.id = decoded.userId; // Ensure you're assigning the userId correctly
        next();
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ 
            success: false, 
            message: "Internal server error" 
        });
    }
};
