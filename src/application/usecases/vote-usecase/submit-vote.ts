import { VoteRepository } from "@/domain/repository";
import { VoteDTO } from "@/application/DTOs";
export class SubmitVoteUseCase {
  constructor(private readonly votationRepository: VoteRepository) {}

  async execute(input: VoteDTO) {
    await this.votationRepository.submitVote(input.id, input.singleVote);
  }
}
