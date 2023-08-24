import { Request, Response } from "express";

import { BaseError } from "../errors/BaseError";
import { ZodError } from "zod";
import { LikesDislikesBusiness } from "../business/LikeDislikeBusiness";
import { EditikeDislikesSchema } from "../dtos/likesDislikes/updateLikeDislike.dto";

export class LikesDislikesController {
  constructor(private likeDislikeBusiness: LikesDislikesBusiness) {}

  public updateLikeDislike = async (req: Request, res: Response) => {
    try {
      const input = EditikeDislikesSchema.parse({
        like: req.body.like,
      });

      /* const output = await this.likeDislikeBusiness.editPost(input);

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
