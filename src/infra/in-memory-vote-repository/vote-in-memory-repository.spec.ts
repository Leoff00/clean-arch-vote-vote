import { VoteEntity } from "@/domain/entity";
import { voteMocksFactory } from "@/mocks/vote-mocks";
import { describe, expect, it } from "vitest";
import { VoteInMemoryRepository } from "./vote-in-memory-repository";

describe("Vote In Memory Repository", () => {
  it("Submit new vote in memory Repository", async () => {
    const { id, singleVote } = voteMocksFactory({});
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const vote = new VoteEntity(singleVote, id);

    await voteInMemoryRepository.submitVote(vote);

    expect(vote).toBeInstanceOf(VoteEntity);
    expect(voteInMemoryRepository.votes).toHaveLength(1);
  });

  it("Should get all votes in memory repository", async () => {
    const { id, singleVote } = voteMocksFactory({});
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const vote = new VoteEntity(singleVote, id);

    await voteInMemoryRepository.submitVote(vote);
    const allVotesInMemory = await voteInMemoryRepository.getVotes();

    expect(allVotesInMemory).toEqual(voteInMemoryRepository.votes);
  });

  it("Should update the vote until reaches 2 votes", async () => {
    const { id, singleVote } = voteMocksFactory({});
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const vote = new VoteEntity(singleVote, id);

    await voteInMemoryRepository.submitVote(vote);
    const { singleVote: renewSingleVote } = voteMocksFactory({ singleVote: 2 });
    await voteInMemoryRepository.incrementVote({
      id,
      singleVote: renewSingleVote,
    });

    expect(voteInMemoryRepository.votes[0].singleVote).toBe(2);
  });

  it("Should update the vote until reaches 10 votes", async () => {
    const { id, singleVote } = voteMocksFactory({});
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const vote = new VoteEntity(singleVote, id);

    await voteInMemoryRepository.submitVote(vote);

    for (let i = 1; i <= vote.MaxTimesVote; i++) {
      await Promise.allSettled([
        voteInMemoryRepository.incrementVote({ singleVote: i, id }),
      ]);
    }

    expect(voteInMemoryRepository.votes[0].singleVote).toBe(vote.MaxTimesVote);
  });

  it("Should throws an exception if input vote was higher than current vote", async () => {
    const { id, singleVote } = voteMocksFactory({ singleVote: 5 });
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const vote = new VoteEntity(singleVote, id);

    await voteInMemoryRepository.submitVote(vote);

    expect(async () => {
      await voteInMemoryRepository.incrementVote({ id, singleVote });
    }).rejects.toThrowError("Não pode enviar um voto maior que o atual.");
    expect(voteInMemoryRepository.votes[0].singleVote).not.toBe(1);
  });
});
