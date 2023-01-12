import { UserEntity } from "../entity/user-entity";

export interface UserRepisotory {
  getUsers: () => Promise<UserEntity>;
  createUser: (user: UserEntity) => Promise<void>;
}
