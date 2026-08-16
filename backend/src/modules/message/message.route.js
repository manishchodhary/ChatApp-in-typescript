import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";


const router = Router();

router.post(
  "/conversations/:conversationId/messages",
  authenticate,
createMessageController
);

export default router;