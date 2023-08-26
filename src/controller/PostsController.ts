import { Request, Response } from "express";
import { PostsBusiness } from "../business/PostsBusiness";
import { BaseError } from "../errors/BaseError";
import { GetPostsSchema } from "../dtos/posts/getPosts.dto";
import { ZodError } from "zod";
import { CreatePostSchema } from "../dtos/posts/createPost.dto";
import { EditPostSchema } from "../dtos/posts/editPost.dto";
import { DeletePostSchema } from "../dtos/posts/deletePost.dto";
import { LikeDislikesSchema } from "../dtos/likesDislikes/updateLikeDislike.dto";

export class PostsController {
  constructor(private postsBusiness: PostsBusiness) {}

  public createPost = async (req: Request, res: Response) => {
    try {
      const input = CreatePostSchema.parse({
        token: req.headers.authorization,
        content: req.body.content,
      });

      const output = await this.postsBusiness.createPost(input);

      res.status(201).send(output);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public getPosts = async (req: Request, res: Response) => {
    try {
      const input = GetPostsSchema.parse({
        token: req.headers.authorization,
      });

      const output = await this.postsBusiness.getPosts(input);

      res.status(200).send(output);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public editPost = async (req: Request, res: Response) => {
    try {
      const input = EditPostSchema.parse({
        token: req.headers.authorization,
        idToEdit: req.params.id,
        content: req.body.content,
      });

      const output = await this.postsBusiness.editPost(input);

      res.status(200).send(output);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public LikeDislike = async (req: Request, res: Response) => {
    try {
      const input = LikeDislikesSchema.parse({
        like: req.body.like,
        id: req.params.id,
        token: req.headers.authorization,
      });

      const output = await this.postsBusiness.LikeDislike(input);

      res.status(200).send(output);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public deletePost = async (req: Request, res: Response) => {
    try {
      const input = DeletePostSchema.parse({
        id: req.params.id,
        token: req.headers.authorization,
      });

      const output = await this.postsBusiness.deletePost(input);

      res.status(200).send(output);
    } catch (error) {
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
