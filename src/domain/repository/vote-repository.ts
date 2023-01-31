import { VoteEntity } from "@/domain/entity";

type IncrementVoteProps = Pick<VoteEntity, "id" | "singleVote">;

export interface VoteRepository {
  submitVote: (vote: VoteEntity) => Promise<void>;
  getVotes: () => Promise<Array<VoteEntity>>;
  incrementVote: ({ id, singleVote }: IncrementVoteProps) => Promise<void>;
}
