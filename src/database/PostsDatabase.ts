import { LikesDislikesDB } from "../models/LikesDislikes";
import { PostsDB } from "../models/Posts";
import { BaseDatabase } from "./BaseDatabase";

export class PostsDatabase extends BaseDatabase {
  public static TABLE_NAME = "posts";
  public static TABLE_NAME_2 = "likes_dislikes";

  public async insertPost(newPostsDB: PostsDB): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME).insert(newPostsDB);
  }

  public async insertLikeDislike(
    newLikeDislikeDB: LikesDislikesDB
  ): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME_2).insert(
      newLikeDislikeDB
    );
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

  public async findLikeDislikeByPostId(
    id: string
  ): Promise<LikesDislikesDB | undefined> {
    const [LikesDislikesDB]: LikesDislikesDB[] | undefined[] = await BaseDatabase.connection(
      PostsDatabase.TABLE_NAME_2
    ).where({ post_id: id });

    return LikesDislikesDB;
  }

  public async updatePost(postDB: PostsDB, idToEdit: string): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME)
      .update(postDB)
      .where({ id: idToEdit });
  }

  public async updateLikeDislike(
    likeDislikeDB: LikesDislikesDB,
    idToEdit: string
  ): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME_2)
      .update(likeDislikeDB)
      .where({ id: idToEdit });
  }

  public async deletePost(id: string): Promise<void> {
    await BaseDatabase.connection(PostsDatabase.TABLE_NAME).del().where({ id });
  }
}
