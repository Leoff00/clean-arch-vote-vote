export class VoteEntity {
  private readonly MAX_TIMES_VOTE: number = 10;

  constructor(
    private readonly id: string,
    private readonly singleVote: number = 0
  ) {}

  hasVoted(): boolean {
    return this.singleVote > 0 && this.singleVote <= this.MAX_TIMES_VOTE;
  }

  hasReachedMaxVotation(): boolean {
    return this.singleVote === this.MAX_TIMES_VOTE;
  }

  canVote(): boolean {
    return this.singleVote === 0;
  }
}
