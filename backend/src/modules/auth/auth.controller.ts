import type{Request,Response } from "express";
import { registerService } from "./auth.service.js";

export const register = async(req:Request,res:Response)=>{
try {
    const user = await registerService(req.body)
    return res.status(200).json({message:"user register successfully",
        user:user
    })
} catch (error) {
    console.log("Error in register",error);
    res.status(500).json({error:"Internal Server Error"});
}
}