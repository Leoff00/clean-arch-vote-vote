import { randomUUID } from "node:crypto";
import { VoteInput } from "@/application/usecases/inputs";

type voteMockFactoryProps = {
  id?: string;
  singleVote?: number;
};

export const voteMocksFactory = ({
  id = randomUUID(),
  singleVote = 1,
}: voteMockFactoryProps): VoteInput => {
  return {
    id,
    singleVote,
  };
};
