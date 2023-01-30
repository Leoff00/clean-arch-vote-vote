import { VoteEntity } from "@/domain/entity";

export interface VoteRepository {
  submitVote: (vote: VoteEntity) => Promise<void>;
  getVotes: () => Promise<Array<VoteEntity>>;
  incrementVote: (id: string, singleVote: number) => Promise<void>;
}
