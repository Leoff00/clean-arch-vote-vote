import { randomUUID } from "node:crypto";
import { VoteDTO } from "@/application/DTOs";

type voteMockFactoryProps = {
  id?: string;
  singleVote?: number;
};

export const voteMocksFactory = ({
  id = randomUUID(),
  singleVote = 1,
}: voteMockFactoryProps): VoteDTO => {
  return {
    id,
    singleVote,
  };
};
