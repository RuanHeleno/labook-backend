import { LikesDislikesDB } from "../models/LikesDislikes";
import { POST_LIKE, PostsDB } from "../models/Posts";
import { BaseDatabase } from "./BaseDatabase";

export class PostsDatabase extends BaseDatabase {
  public static TABLE_NAME = "posts";
  public static TABLE_NAME_2 = "likes_dislikes";

  public async insertPost(newPostsDB: PostsDB): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME).insert(newPostsDB);
  }

  public async findPosts(): Promise<PostsDB[]> {
    const result: PostsDB[] = await BaseDatabase.connection(
      PostsDatabase.TABLE_NAME
    );

    return result;
  }

  public async findPostById(id: string): Promise<PostsDB | undefined> {
    const [PostsDB]: PostsDB[] | undefined[] = await BaseDatabase.connection(
      PostsDatabase.TABLE_NAME
    ).where({ id });

    return PostsDB;
  }

  public async updatePost(postDB: PostsDB, idToEdit: string): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME)
      .update(postDB)
      .where({ id: idToEdit });
  }

  public async deletePost(id: string): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME).del().where({ id });
  }

  public async insertLikeDislike(
    newLikeDislikeDB: LikesDislikesDB
  ): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME_2).insert(
      newLikeDislikeDB
    );
  }

  public findLikeDislike = async (
    likeDislikeDB: LikesDislikesDB
  ): Promise<POST_LIKE | undefined> => {
    const [result]: Array<LikesDislikesDB | undefined> =
      await BaseDatabase.connection(PostsDatabase.TABLE_NAME_2).select().where({
        user_id: likeDislikeDB.user_id,
        post_id: likeDislikeDB.post_id,
      });

    if (result === undefined) {
      return undefined;
    } else if (result.like === 1) {
      return POST_LIKE.ALREADY_LIKED;
    } else {
      return POST_LIKE.ALREADY_DISLIKED;
    }
  };

  public removeLikeDislike = async (
    likeDislikeDB: LikesDislikesDB
  ): Promise<void> => {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME_2).delete().where({
      user_id: likeDislikeDB.user_id,
      post_id: likeDislikeDB.post_id,
    });
  };

  public updateLikeDislike = async (
    likeDislikeDB: LikesDislikesDB
  ): Promise<void> => {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME_2)
      .update(likeDislikeDB)
      .where({
        user_id: likeDislikeDB.user_id,
        post_id: likeDislikeDB.post_id,
      });
  };
}
