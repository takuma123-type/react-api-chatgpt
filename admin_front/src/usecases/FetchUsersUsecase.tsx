import { UsersRepository } from "../infrastructure/repositories/UsersRepository";
import { UserItem } from "../models/presentation/UserItem";

export class FetchUsersUsecase {
  static async fetch(
    usersRepository: UsersRepository,
    sessionToken: string
  ): Promise<UserItem[]> {
    try {
      const usersData = await usersRepository.fetch(sessionToken);
      const formattedUsers = usersData.map((user: any) => new UserItem(user));
      return formattedUsers;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
