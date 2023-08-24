export interface LikesDislikesDB {
  post_id: string;
  creator_id: string;
  like: number;
}

// é o modelo de LikesDislikes que o front receberá (camelCase)
export interface LikesDislikesModel {
  postId: string;
  creatorId: string;
  like: number;
}

export class LikesDislikes {
  constructor(
    private postId: string,
    private creatorId: string,
    private like: number
  ) {}

  public getPostId(): string {
    return this.postId;
  }

  public getCreatorId(): string {
    return this.creatorId;
  }

  public getLike(): number {
    return this.like;
  }

  public setLike(value: number) {
    this.like = value;
  }

  // para facilitar nossa vida, temos o método que gera um LikesDislikesDB
  public toDBModel(): LikesDislikesDB {
    return {
      post_id: this.postId,
      creator_id: this.creatorId,
      like: this.like,
    };
  }

  // para facilitar nossa vida, temos o método que gera um LikesDislikesModel
  public toBusinessModel(): LikesDislikesModel {
    return {
      postId: this.postId,
      creatorId: this.creatorId,
      like: this.like,
    };
  }
}
