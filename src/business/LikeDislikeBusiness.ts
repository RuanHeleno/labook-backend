/* import { LikesDislikesDatabase } from "../database/LikesDislikesDatabase";
import { CreateLikeDislikesInputDTO, CreateLikeDislikestOutputDTO } from "../dtos/likesDislikes/updateLikeDislike.dto";
import { TokenManager } from "../services/TokenManager";

export class LikesDislikesBusiness {
  constructor(
    private likeDislikeDatabase: LikesDislikesDatabase,
    private tokenManager: TokenManager,
  ) {}

    public createLikeDislike = async (
      input: CreateLikeDislikesInputDTO
    ): Promise<CreateLikeDislikestOutputDTO> => {
      const { token, content } = input;
  
      const payload = this.tokenManager.getPayload(token);
  
      if (!payload) {
        throw new BadRequestError("Token inválido");
      }
  
      const id = this.idGenerator.generateId();
  
      const postDBExists = await this.postsDatabase.findPostById(id);
  
      if (postDBExists) {
        throw new BadRequestError("'id' já existe");
      }
  
      const likes = 0;
      const dislikes = 0;
  
      const date = new Date();
      date.setUTCHours(date.getUTCHours() - 3); // Subtrai 3 horas para ajustar para GMT-3
  
      const isoDateString = date
        .toISOString()
        .replace("T", " ")
        .replace("Z", " ")
        .substring(0, 19);
  
      const newPost = new Posts(
        id,
        payload.id,
        content,
        likes,
        dislikes,
        isoDateString,
        isoDateString
      );
  
      const newPostDB = newPost.toDBModel();
      await this.postsDatabase.insertPost(newPostDB);
  
      const output: CreatePostOutputDTO = {
        content,
      };
  
      return output;
    };
  
} */