export class VoteEntity {
  private readonly MAX_TIMES_VOTE: number = 10;
  id: string;
  singleVote = 0;

  constructor(id: string, singleVote: number) {
    this.id = id;
    this.singleVote = singleVote;
  }

  get MaxTimesVote() {
    return this.MAX_TIMES_VOTE;
  }

  hasVoted(): boolean {
    return this.singleVote > 0 && this.singleVote <= this.MAX_TIMES_VOTE;
  }

  hasExceededMaxTimesVote() {
    if (this.singleVote > this.MAX_TIMES_VOTE) {
      this.singleVote = this.MAX_TIMES_VOTE
      throw new Error("Você ultrapassou o limite de votação!");
    }
  }

  hasReachedMaxVotation(): boolean {
    return this.singleVote === this.MAX_TIMES_VOTE;
  }

  toJSON() {
    return {
      id: this.id,
      singleVote: this.singleVote,
    };
  }
}
