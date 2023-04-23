import { ParticipantDTO } from "./ParticipantDTO";

export type ReplayDTO = {
  matchId: string;
  gameDuration: number;
  gameVersion: string;
  participants: ParticipantDTO[];
};
