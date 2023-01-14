import { VoteRepository } from "@/domain/repository";

export class GetVotes {
  constructor(private readonly votationRepository: VoteRepository) {}

  async execute() {
    const data = await this.votationRepository.getVotes();
    return data;
  }
}
