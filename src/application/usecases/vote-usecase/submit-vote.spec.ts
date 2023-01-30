import { VoteInMemoryRepository } from "@/infra/vote-in-memory-repository";
import { voteMocksFactory } from "@/mocks/vote-mocks";
import { describe, expect, test } from "vitest";
import { SubmitVoteUseCase } from "./submit-vote";

describe("Submit vote use case", () => {
  test("Should submit the vote", async () => {
    const voteRepository = new VoteInMemoryRepository();
    const submitVoteUseCase = new SubmitVoteUseCase(voteRepository);
    const { id, singleVote } = voteMocksFactory({});

    await submitVoteUseCase.execute({ id, singleVote });

    expect(voteRepository.votes).toHaveLength(1);
  });
});
