import { VoteRepository } from "@/domain/repository";
import { VoteInput } from "@/application/usecases/inputs";

export class IncrementVoteUseCase {
  constructor(private readonly votationRepository: VoteRepository) {}

  async execute(input: VoteInput): Promise<void> {
    await this.votationRepository.incrementVote({
      singleVote: input.singleVote,
      id: input.id,
    });
  }
}
