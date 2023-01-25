import { VoteEntity } from "@/domain/entity";
import { voteMocksFactory } from "@/mocks/vote-mocks";
import { describe, expect, it } from "vitest";
import { VoteInMemoryRepository } from "./vote-in-memory-repository";

describe("Vote In Memory Repository", () => {
  it("Submit new vote in memory Repository", async () => {
    const { id, singleVote } = voteMocksFactory({});
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const vote = new VoteEntity(id, singleVote);

    await voteInMemoryRepository.submitVote(vote.id, vote.singleVote);

    expect(vote).toBeInstanceOf(VoteEntity);
    expect(voteInMemoryRepository.votes).toHaveLength(1);
  });

  it("Should get all votes in memory repository", async () => {
    const { id, singleVote } = voteMocksFactory({});
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const vote = new VoteEntity(id, singleVote);

    await voteInMemoryRepository.submitVote(vote.id, vote.singleVote);
    const allVotesInMemory = await voteInMemoryRepository.getVotes();

    expect(allVotesInMemory).toEqual(voteInMemoryRepository.votes);
  });
});
