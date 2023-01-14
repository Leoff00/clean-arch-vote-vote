import { UserDTO } from "@/application/DTOs/User.DTO";
import { UserRepisotory } from "@/domain/repository";

export class CreateUser {
  constructor(private readonly user: UserRepisotory) {}

  async execute(input: UserDTO): Promise<void> {
    await this.user.createUser(input.username, input.age, input.id);
  }
}
