import { VoteEntity } from "@/domain/entity";

export interface VoteRepository {
  submitVote: (id: string, singleVote: number) => Promise<void>;
  getVotes: () => Promise<Array<VoteEntity>>;
}
