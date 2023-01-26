import { VoteDTO } from "@/application/DTOs";
import { VoteRepository } from "@/domain/repository";

export class GetVotesUseCase {
  constructor(private readonly votationRepository: VoteRepository) {}

  async execute(): Promise<Array<VoteDTO>> {
    const data = await this.votationRepository.getVotes();
    return data.map((v) => v.toJSON());
  }
}
