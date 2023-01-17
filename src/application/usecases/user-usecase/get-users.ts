import { UserRepisotory } from "@/domain/repository";

export class GetUsersUseCase {
  constructor(private readonly userRepository: UserRepisotory) {}

  async execute() {
    const data = await this.userRepository.getUsers();
    return data;
  }
}
