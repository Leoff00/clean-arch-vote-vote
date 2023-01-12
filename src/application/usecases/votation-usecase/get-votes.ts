import { VotationRepository } from "@/domain/repository";

export class GetVotes {
  constructor(private readonly votationRepository: VotationRepository) {}

  async execute() {
    const data = await this.votationRepository.getVotes();
    return data;
  }
}
