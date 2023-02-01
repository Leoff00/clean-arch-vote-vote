import { Router } from "express";
import { VoteController } from "@/infra/http/controllers/vote-controller";

const routes = Router();

const voteController = new VoteController();

routes.get("/get-votes", voteController.getVotesHandler);
routes.post("/submit-vote", voteController.submitVoteHandler);
routes.put("/increment-vote/:id", voteController.incrementVoteHandler);

export { routes };
