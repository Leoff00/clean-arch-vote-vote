import { UserEntity } from "../entity/user-entity";

export interface UserRepisotory {
  getUsers: () => Promise<UserEntity>;
  createUser: (username: string, age: string, id: string) => Promise<void>;
}
