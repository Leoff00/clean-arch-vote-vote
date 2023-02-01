import {
  GetVotesUseCase,
  IncrementVoteUseCase,
  SubmitVoteUseCase,
} from "@/application/usecases/vote-usecase";
import { VoteDTO } from "@/infra/DTOs/vote-dto";
import { VoteInMemoryRepository } from "@/infra/in-memory-vote-repository";
import { Request, Response } from "express";
import { BadRequest } from "@/infra/http/errors";

const voteInMemoryRepository = new VoteInMemoryRepository();

export class VoteController {
  async getVotesHandler(_: Request, response: Response) {
    const getVotesUseCase = new GetVotesUseCase(voteInMemoryRepository);
    const allVotes = await getVotesUseCase.execute();

    return response.status(200).json(allVotes);
  }

  async submitVoteHandler(request: Request, response: Response) {
    const voteDTO = request.body as VoteDTO;
    const submitVoteUseCase = new SubmitVoteUseCase(voteInMemoryRepository);

    if (!voteDTO.singleVote)
      throw new BadRequest("Dados invalidos para requisição.");

    await submitVoteUseCase.execute(voteDTO);

    return response.status(201).json();
  }

  async incrementVoteHandler(request: Request, response: Response) {
    const { id } = request.params as Pick<VoteDTO, "id">;
    const { singleVote } = request.body as Pick<VoteDTO, "singleVote">;
    const incrementVoteUseCase = new IncrementVoteUseCase(
      voteInMemoryRepository
    );

    if (!singleVote)
      throw new BadRequest("Parametro singleVote é obrigatório.");

    await incrementVoteUseCase.execute({
      id,
      singleVote,
    });

    return response.status(204).json();
  }
}
