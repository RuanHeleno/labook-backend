/* import { LikesDislikesDB } from "../models/LikesDislikes";
import { BaseDatabase } from "./BaseDatabase";

export class LikesDislikesDatabase extends BaseDatabase {
  public static TABLE_NAME = "likes_dislikes";

  public async findUsers(q: string | undefined): Promise<LikesDislikesDB[]> {
    let usersDB;

    if (q) {
      const result: LikesDislikesDB[] = await BaseDatabase.connection(
        LikesDislikesDatabase.TABLE_NAME
      ).where("name", "LIKE", `%${q}%`);

      usersDB = result;
    } else {
      const result: LikesDislikesDB[] = await BaseDatabase.connection(
        LikesDislikesDatabase.TABLE_NAME
      );

      usersDB = result;
    }

    return usersDB;
  }
}
 */