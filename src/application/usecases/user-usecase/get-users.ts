import { UserRepisotory } from "@/domain/repository";

export class GetVotes {
  constructor(private readonly userRepository: UserRepisotory) {}

  async execute() {
    const data = await this.userRepository.getUsers();
    return data;
  }
}
