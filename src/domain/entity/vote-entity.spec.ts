import { describe, expect, it } from "vitest";
import { VoteEntity } from "./vote-entity";
import { randomUUID } from "node:crypto";

describe("Vote Entity Business Rules", () => {
  it("Should check if user votes", () => {
    const mock = {
      id: randomUUID(),
      singleVote: 1,
    };
    const vote = new VoteEntity(mock.id, mock.singleVote);

    expect(vote.hasVoted()).toBe(true);
  });

  it("Should check if vote has reached max limit", () => {
    const mock = {
      id: randomUUID(),
      singleVote: 10,
    };

    const vote = new VoteEntity(mock.id, mock.singleVote);

    expect(vote.hasReachedMaxVotation()).toBe(true);
  });

  it("Should check if vote throws an exception and singleVote receives 10", () => {
    const mock = {
      id: randomUUID(),
      singleVote: 11,
    };

    const vote = new VoteEntity(mock.id, mock.singleVote);

    expect(() => vote.hasExceededMaxTimesVote()).toThrowError(
      "Você ultrapassou o limite de votação!"
    );
    expect(vote.singleVote).toBe(10)
  });
});
