import { VoteEntity } from "@/domain/entity";
import { VoteRepository } from "@/domain/repository/vote-repository";

export class VoteInMemoryRepository implements VoteRepository {
  private repoVote: VoteEntity[] = [];

  get votes() {
    return this.repoVote;
  }

  async submitVote(vote: VoteEntity) {
    await this.votes.push(vote);
  }

  async getVotes() {
    const allVotes = await this.votes;
    return allVotes;
  }
}
