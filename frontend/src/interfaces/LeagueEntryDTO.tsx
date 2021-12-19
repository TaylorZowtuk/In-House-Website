import { MiniSeriesDTO } from "./MiniSeriesDTO";

export type LeagueEntryDTO = {
    leagueId: string;
    summonerId: string; // Player's encrypted summonerId.
    summonerName: string;
    queueType: string;
    tier: string;
    rank: string; // The player's division within a tier.
    leaguePoints: bigint;
    wins: bigint; // Winning team on Summoners Rift.
    losses: bigint; // Losing team on Summoners Rift.
    hotStreak: boolean;
    veteran: boolean;
    freshBlood: boolean;
    inactive: boolean;
    miniSeries: MiniSeriesDTO;
}