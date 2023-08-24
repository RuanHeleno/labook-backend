import z from "zod"
import { LikesDislikesModel } from "../../models/LikesDislikes"

export interface GetLikesDislikesUserIdInputDTO {
  q: string
}

// LikesDislikesModel é a estrutura de Product que será devolvida para o Front
// (sem password e createdAt camelCase)
export type GetLikesDislikesUserIdOutputDTO = LikesDislikesModel[]

export const GetLikesDislikesUserIdSchema = z.object({
  q: z.string().min(1).optional()
}).transform(data => data as GetLikesDislikesUserIdInputDTO)