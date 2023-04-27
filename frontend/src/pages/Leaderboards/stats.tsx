import axios from "axios";

import { PlayerStatDTO } from "../../../../backend/src/types/PlayerStatDTO";
import { AggregatedPlayerStatDTO } from "../../../../backend/src/types/AggregatedPlayerStatDTO";

export async function getStats(): Promise<PlayerStatDTO[]> {
  const statsResponse = await axios.get<PlayerStatDTO[]>(`/player/stats`);
  const stats: PlayerStatDTO[] = statsResponse.data;
  return stats;
}

export async function getAggregatedStats(): Promise<AggregatedPlayerStatDTO[]> {
  const statsResponse = await axios.get<AggregatedPlayerStatDTO[]>(
    `/player/aggregatedStats`
  );
  const stats: AggregatedPlayerStatDTO[] = statsResponse.data;
  return stats;
}
