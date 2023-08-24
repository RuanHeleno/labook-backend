import express from "express";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { LikesDislikesDatabase } from "../database/LikesDislikesDatabase";
import { LikesDislikesController } from "../controller/LikesDislikesController";
import { LikesDislikesBusiness } from "../business/LikeDislikeBusiness";

export const LikesDislikesRouter = express.Router();

const likesDislikesController = new LikesDislikesController(
  new LikesDislikesBusiness(/* new LikesDislikesDatabase(), new IdGenerator(), new TokenManager() */)
);

LikesDislikesRouter.get("/", likesDislikesController.getLikeDislikeUserId);
LikesDislikesRouter.get("/", likesDislikesController.createLikeDislike);
