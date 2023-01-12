import { VotationRepository } from "@/domain/repository";

type Input = {
  id: string;
  singleVote: number;
};

export class SubmitVote {
  constructor(private readonly votationRepository: VotationRepository) {}

  async execute(params: Input) {
    await this.votationRepository.submitVote(params.id, params.singleVote);
  }
}
