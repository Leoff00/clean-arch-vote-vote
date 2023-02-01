import { VoteEntity } from "@/domain/entity";
import { VoteRepository } from "@/domain/repository/vote-repository";

type IncrementVoteProps = Pick<VoteEntity, "id" | "singleVote">;

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

  private async findVoteById(id?: string): Promise<VoteEntity> {
    const currentVote = await this.votes.find((vote) => {
      return vote.id === id;
    });
    return currentVote;
  }

  async incrementVote({ singleVote, id }: IncrementVoteProps): Promise<void> {
    const currentVote = await this.findVoteById(id);
    if (currentVote.singleVote < singleVote) {
      currentVote.singleVote = singleVote;
    } else {
      throw new Error("Não pode enviar um voto maior que o atual.");
    }
  }
}
