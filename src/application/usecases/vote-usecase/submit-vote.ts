import { VoteRepository } from "@/domain/repository";
import { VoteEntity } from "@/domain/entity";
import { VoteInput } from "@/application/usecases/inputs";

export class SubmitVoteUseCase {
  constructor(private readonly votationRepository: VoteRepository) {}

  async execute(input: VoteInput) {
    const vote = new VoteEntity(input.singleVote, input.id);
    await this.votationRepository.submitVote(vote);
  }
}
