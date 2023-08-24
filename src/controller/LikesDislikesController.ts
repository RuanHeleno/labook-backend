import { Request, Response } from "express";

import { BaseError } from "../errors/BaseError";
import { ZodError } from "zod";
import { GetLikesDislikesUserIdSchema } from "../dtos/likesDislikes/getUser.dto";
import { CreatelikeDislikesSchema } from "../dtos/likesDislikes/createlikeDislike.dto";
import { LikesDislikesBusiness } from "../business/LikeDislikeBusiness";

export class LikesDislikesController {
  constructor(private likeDislikeBusiness: LikesDislikesBusiness) {}

  public getLikeDislikeUserId = async (req: Request, res: Response) => {
    try {
      const input = GetLikesDislikesUserIdSchema.parse({
        q: req.query.q,
      });

      /* const output = await this.likeDislikeBusiness.(input);

      res.status(200).send(output); */
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public createLikeDislike = async (req: Request, res: Response) => {
    try {
      const input = CreatelikeDislikesSchema.parse({
        likes: 0,
      });

      /* const output = await this.likeDislikeBusiness.(input);

      res.status(200).send(output); */
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
}
