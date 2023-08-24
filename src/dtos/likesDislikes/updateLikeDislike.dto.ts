import z from "zod";

export interface EditikeDislikesInputDTO {
  likes: boolean;
  idToEdit: string;
  token: string;
}

export interface EditikeDislikestOutputDTO {
  like: boolean;
}

export const EditikeDislikesSchema = z
  .object({
    likes: z.boolean(),
    idToEdit: z.string().min(1),
    token: z.string().min(1)
  })
  .transform((data) => data as EditikeDislikesInputDTO);
