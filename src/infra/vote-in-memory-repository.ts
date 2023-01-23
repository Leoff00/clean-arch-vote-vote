import { VoteRepository } from "@/domain/repository/vote-repository";

export class VoteInMemoryRepository implements VoteRepository {
  private repoVote = [];

  get votes() {
    return this.repoVote;
  }

  async submitVote(id: string, singleVote: number) {
    await this.votes.push({ id, singleVote })
  }

  async getVotes() {
    const allVotes = await this.votes;
    return allVotes;
  }
}
