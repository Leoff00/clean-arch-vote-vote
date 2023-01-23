import { VoteEntity } from "@/domain/entity";
import { voteMocks } from "@/mocks/vote-mocks";
import { describe, expect, it } from "vitest";
import { VoteInMemoryRepository } from "./vote-in-memory-repository";

describe("Vote In Memory Repository", () => {
  it("Submit new vote in memory Repository", async () => {
    const { id, singleVote } = voteMocks();
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const vote = new VoteEntity(id, singleVote);

    await voteInMemoryRepository.submitVote(vote.id, vote.singleVote);

    expect(voteInMemoryRepository.votes).toEqual([{ id, singleVote }]);
    expect(vote).toBeInstanceOf(VoteEntity);
    expect(voteInMemoryRepository.votes).toHaveLength(1);
  });
});
