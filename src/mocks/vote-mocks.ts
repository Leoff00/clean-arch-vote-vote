import { randomUUID } from "node:crypto";
import { VoteDTO } from "@/application/DTOs";

export const voteMocksFactory = (
    id: string = randomUUID(),
    singleVote: number = 1
): VoteDTO => {
    return {
        id,
        singleVote,
    };
};
