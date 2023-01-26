import { UserRepisotory } from "@/domain/repository";
import { UserInput } from "@/application/usecases/inputs";

export class CreateUserUseCase {
  constructor(private readonly user: UserRepisotory) {}

  async execute(input: UserInput): Promise<void> {
    await this.user.createUser(input.username, input.age, input.id);
  }
}
