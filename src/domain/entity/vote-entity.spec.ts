import { describe, expect, it } from "vitest";
import { VoteEntity } from "./vote-entity";
import { voteMocksFactory } from "@/mocks/vote-mocks";

describe("Vote Entity Business Rules", () => {
  it("Should check if user votes", () => {
    const { id, singleVote } = voteMocksFactory({});
    const vote = new VoteEntity(singleVote, id);

    expect(vote.hasVoted()).toBe(true);
  });

  it("Should check if randomUUID has been called omiting param", () => {
    const { singleVote } = voteMocksFactory({});
    const vote = new VoteEntity(singleVote);

    expect(vote.id).toHaveLength(36);
  });

  it("Should check if vote has reached max limit", () => {
    const { id, singleVote } = voteMocksFactory({ singleVote: 10 });
    const vote = new VoteEntity(singleVote, id);

    expect(vote.hasReachedMaxVotation()).toBe(true);
  });

  it("Should check if vote throws an exception and singleVote receives 10", () => {
    const { id, singleVote } = voteMocksFactory({ singleVote: 11 });
    const vote = new VoteEntity(singleVote, id);
    expect(() => vote.hasExceededMaxTimesVote()).toThrowError(
      "Você ultrapassou o limite de votação!"
    );
    expect(vote.singleVote).toBe(vote.MaxTimesVote);
  });
});
