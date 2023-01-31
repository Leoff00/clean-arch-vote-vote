import { VoteRepository } from "@/domain/repository";
import { VoteInput } from "@/application/usecases/inputs";

export class IncrementVoteUseCase {
  constructor(private readonly votationRepository: VoteRepository) {}

  async execute(input: VoteInput): Promise<void> {
    await this.votationRepository.incrementVote({
      id: input.id,
      singleVote: input.singleVote,
    });
  }
}
