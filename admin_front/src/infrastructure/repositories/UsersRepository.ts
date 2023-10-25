import axios from "axios";
import { API } from "../API";
import { UnauthorizedError, UnknownError } from "./errors";

export class UsersRepository {
  async fetch(sessionToken: string): Promise<any> {
    try {
      const response = await axios.get(API.createURL(API.URL.users()), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-SOEUR-ADMIN-API-Key": "hogehoge",
          Authorization: `Bearer ${sessionToken}`,
        },
      });
      console.log("API response:", response);

      if (response.status === 200) {
        return response.data.results;
      }

      if (response.status === 401) {
        throw new UnauthorizedError();
      }

      throw new UnknownError();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
