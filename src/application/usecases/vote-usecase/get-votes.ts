import { VoteRepository } from "@/domain/repository";
import { VoteInput } from "@/application/usecases/inputs";

export class GetVotesUseCase {
  constructor(private readonly votationRepository: VoteRepository) {}

  async execute(): Promise<Array<VoteInput>> {
    const data = await this.votationRepository.getVotes();
    return data.map((v) => v.toJSON());
  }
}
