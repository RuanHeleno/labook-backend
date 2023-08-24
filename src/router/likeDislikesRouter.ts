import express from "express";
import { TokenManager } from "../services/TokenManager";
import { LikesDislikesDatabase } from "../database/LikesDislikesDatabase";
import { LikesDislikesController } from "../controller/LikesDislikesController";
import { LikesDislikesBusiness } from "../business/LikeDislikeBusiness";

export const LikesDislikesRouter = express.Router();

const likesDislikesController = new LikesDislikesController(
  new LikesDislikesBusiness(new LikesDislikesDatabase(), new TokenManager())
);

LikesDislikesRouter.put("/:id/", likesDislikesController.updateLikeDislike);