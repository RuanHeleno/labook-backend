import z from "zod";
import { GetPostsModel } from "../../models/Posts";

export interface GetPostsInputDTO {
  token: string;
}

// PostsModel é a estrutura de Product que será devolvida para o Front
// (sem password e createdAt camelCase)
export type GetPostsOutputDTO = GetPostsModel[];

export const GetPostsSchema = z
  .object({
    token: z.string().min(1)
  })
  .transform((data) => data as GetPostsInputDTO);
