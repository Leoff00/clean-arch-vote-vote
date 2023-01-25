import { VoteEntity } from "@/domain/entity";
import { VoteInMemoryRepository } from "@/infra/vote-in-memory-repository";
import { voteMocksFactory } from "@/mocks/vote-mocks";
import { describe, expect, test } from "vitest";
import { GetVotesUseCase } from "./get-votes";
import { SubmitVoteUseCase } from "./submit-vote";

describe("Get votes usecases", () => {
  test("Should got all votes", async () => {
    const voteRepository = new VoteInMemoryRepository();
    const getVotesUseCase = new GetVotesUseCase(voteRepository);
    const submitVoteUseCase = new SubmitVoteUseCase(voteRepository);
    const { id, singleVote } = voteMocksFactory({});

    await submitVoteUseCase.execute({ id, singleVote });
    const allVotes = await getVotesUseCase.execute();

    expect(allVotes).toBeInstanceOf(Array<VoteEntity>);
    expect(allVotes).toEqual([{ id, singleVote }]);
  });
});
