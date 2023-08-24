export interface LikesDislikesDB {
  post_id: string;
  user_id: string;
  like: number | null;
}

export class LikesDislikes {
  constructor(
    private postId: string,
    private userId: string,
    private like: number | null
  ) {}

  public getPostId(): string {
    return this.postId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getLike(): number | null {
    return this.like;
  }

  public setLike(value: number) {
    this.like = value;
  }

  // para facilitar nossa vida, temos o método que gera um LikesDislikesDB
  public toDBModel(): LikesDislikesDB {
    return {
      post_id: this.postId,
      user_id: this.userId,
      like: this.like,
    };
  }
}
