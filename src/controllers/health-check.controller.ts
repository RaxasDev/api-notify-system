
import { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response): void => {
	res.json({ message: "Hello, TypeScript + Express API!" });
};