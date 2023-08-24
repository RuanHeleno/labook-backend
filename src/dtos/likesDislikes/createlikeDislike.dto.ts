import z from "zod";
import { LikesDislikes } from "../../models/LikesDislikes";

export interface CreateLikeDislikesInputDTO {
  creator_id: string;
  post_id: string;
  likes: number;
}

export interface CreateLikeDislikestOutputDTO {
  message: string;
  likeDislike: LikesDislikes;
}

export const CreatelikeDislikesSchema = z
  .object({
    creator_id: z.string().min(1),
    post_id: z.string().min(1),
    likes: z.number().gt(0),
  })
  .transform((data) => data as CreateLikeDislikesInputDTO);
