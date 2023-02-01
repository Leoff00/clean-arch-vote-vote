import { VoteEntity } from "@/domain/entity";
import { VoteInMemoryRepository } from "@/infra/in-memory-vote-repository";
import { voteMocksFactory } from "@/mocks/vote-mocks";
import { describe, expect, test } from "vitest";
import { GetVotesUseCase } from "./get-votes";
import { VoteInput } from "@/application/usecases/inputs";

describe("Get votes list use case", () => {
  test("Should get at least one or more votes saved", async () => {
    const voteRepository = new VoteInMemoryRepository();
    const getVotesUseCase = new GetVotesUseCase(voteRepository);
    const { id, singleVote } = voteMocksFactory({});
    const vote = new VoteEntity(singleVote, id);

    await voteRepository.submitVote(vote);
    const allVotes = await getVotesUseCase.execute();

    expect(allVotes).toEqual([{ id, singleVote }]);
    expect(allVotes).toHaveLength(1);
    expect(allVotes).toBeInstanceOf(Array<VoteInput>);
  });
});
