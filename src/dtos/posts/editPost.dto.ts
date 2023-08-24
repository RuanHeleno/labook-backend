import z from "zod";

export interface EditPostInputDTO {
  token: string;
  idToEdit: string;
  content: string;
}

export interface EditPostOutputDTO {
  content: string;
}

export const EditPostSchema = z
  .object({
    token: z.string().min(1),
    idToEdit: z.string().min(1),
    content: z.string().min(10),
  })
  .transform((data) => data as EditPostInputDTO);
