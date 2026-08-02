import type { Request, Response } from "express";
import { registerService } from "./auth.service.js";
import asyncHandler from "../../utils/asyncHandler.js";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const user = await registerService(req.body);

  return res.status(201).json({
    success: true,
    data: user,
  });
});
