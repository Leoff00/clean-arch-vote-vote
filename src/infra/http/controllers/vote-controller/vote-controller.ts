import {
  GetVotesUseCase,
  IncrementVoteUseCase,
  SubmitVoteUseCase,
} from "@/application/usecases/vote-usecase";
import { VoteDTO } from "@/infra/DTOs/vote-dto";
import { VoteInMemoryRepository } from "@/infra/in-memory-vote-repository";
import { Request, Response } from "express";

export class VoteController {
  async getVotesHandler(_: Request, response: Response) {
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const getVotesUseCase = new GetVotesUseCase(voteInMemoryRepository);
    const allVotes = await getVotesUseCase.execute();

    return response.status(200).json(allVotes);
  }

  async submitVoteHandler(request: Request, response: Response) {
    const voteDTO = request.body as VoteDTO;
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const submitVoteUseCase = new SubmitVoteUseCase(voteInMemoryRepository);

    await submitVoteUseCase.execute(voteDTO);

    return response.status(201).json();
  }

  async incrementVoteHandler(request: Request, response: Response) {
    const voteDTO = request.body as VoteDTO;
    const voteInMemoryRepository = new VoteInMemoryRepository();
    const incrementVoteUseCase = new IncrementVoteUseCase(
      voteInMemoryRepository
    );

    await incrementVoteUseCase.execute({
      id: voteDTO.id,
      singleVote: voteDTO.singleVote,
    });

    return response.status(204).json();
  }
}
