import { VoteEntity } from "@/domain/entity";
import { VoteRepository } from "@/domain/repository/vote-repository";

export class VoteInMemoryRepository implements VoteRepository {
  private repoVote: VoteEntity[] = [];

  get votes() {
    return this.repoVote;
  }

  async submitVote(vote: VoteEntity): Promise<void> {
    await this.votes.push(vote);
  }

  async getVotes(): Promise<Array<VoteEntity>> {
    const allVotes = await this.votes;
    return allVotes;
  }
}
