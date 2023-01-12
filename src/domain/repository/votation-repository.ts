import { VoteEntity } from "@/domain/entity";

export interface VotationRepository {
  submitVote: (id: string, singleVote: number) => Promise<void>;
  getVotes: () => Promise<Array<VoteEntity>>;
}
