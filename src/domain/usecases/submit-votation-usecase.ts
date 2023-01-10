import { Votation } from "@/domain/entity";
export namespace VotationEntity {
  export type Params = Votation;
}

export interface SubmitVotation {
  submit: (params: VotationEntity.Params) => Promise<void>;
}
