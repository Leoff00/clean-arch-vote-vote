import { VoteEntity } from "@/domain/entity";
import { VoteInMemoryRepository } from "@/infra/in-memory-vote-repository";
import { voteMocksFactory } from "@/mocks/vote-mocks";
import { describe, expect, test } from "vitest";
import { IncrementVoteUseCase } from "./increment-vote";

describe("Increment Vote Use Case", () => {
  test("Should return only the input vote", async () => {
    const voteRepository = new VoteInMemoryRepository();
    const incrementVoteUseCase = new IncrementVoteUseCase(voteRepository);
    const { id, singleVote } = voteMocksFactory({});
    const vote = new VoteEntity(id, singleVote);

    await voteRepository.submitVote(vote);
    await incrementVoteUseCase.execute({ id, singleVote: 5 });

    expect(vote.singleVote).toBe(5);
    expect(vote.singleVote).not.toBe(3);
  });
});
