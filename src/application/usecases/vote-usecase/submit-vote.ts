import { VoteRepository } from "@/domain/repository";
import { VoteDTO } from "@/application/DTOs";
import { VoteEntity } from "@/domain/entity";

export class SubmitVoteUseCase {
  constructor(private readonly votationRepository: VoteRepository) { }

  async execute(input: VoteDTO) {
    const vote = new VoteEntity(input.id, input.singleVote);
    await this.votationRepository.submitVote(vote.id, vote.singleVote);
  }
}
