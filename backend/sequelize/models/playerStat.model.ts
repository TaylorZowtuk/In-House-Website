import { DataTypes, Sequelize } from "sequelize";

function playerStat(sequelize: Sequelize): any {
  sequelize.define("playerStat", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    // matchId: {type: DataTypes.STRING} implicitly added by associations.ts
    assists: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    baronKills: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    barracksKilled: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    bountyLevel: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    championMissionStat0: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    championMissionStat1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    championMissionStat2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    championMissionStat3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    championTransform: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    championsKilled: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    combatPlayerScore: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    consumablesPurchased: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    doubleKills: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dragonKills: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    exp: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    friendlyDampenLost: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    friendlyHqLost: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    friendlyTurretLost: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gameEndedInEarlySurrender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gameEndedInSurrender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    goldEarned: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    goldSpent: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    hqKilled: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    individualPosition: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    item0: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    item1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    item2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    item3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    item4: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    item5: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    item6: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    itemsPurchased: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    keystoneId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    killingSprees: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    largestCriticalStrike: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    largestKillingSpree: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    largestMultiKill: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    level: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    longestTimeSpentLiving: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    magicDamageDealtPlayer: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    magicDamageDealtToChampions: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    magicDamageTaken: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    minionsKilled: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    mutedAll: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    neutralMinionsKilled: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    neutralMinionsKilledEnemyJungle: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    neutralMinionsKilledYourJungle: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nodeCapture: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nodeCaptureAssist: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nodeNeutralize: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nodeNeutralizeAssist: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    numDeaths: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    objectivePlayerScore: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    objectivesStolen: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    objectivesStolenAssists: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    pentaKills: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perkPrimaryStyle: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perkSubStyle: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk0: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk0Var1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk0Var2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk0Var3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk1Var1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk1Var2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk1Var3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk2Var1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk2Var2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk2Var3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk3Var1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk3Var2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk3Var3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk4: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk4Var1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk4Var2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk4Var3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk5: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk5Var1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk5Var2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    perk5Var3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    physicalDamageDealtPlayer: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    physicalDamageDealtToChampions: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    physicalDamageTaken: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ping: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerPosition: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerRole: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore0: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore10: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore11: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore3: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore4: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore5: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore6: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore7: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore8: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playerScore9: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playersIMuted: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    playersThatMutedMe: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    quadraKills: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    sightWardsBoughtInGame: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    skin: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    spell1Cast: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    spell2Cast: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    spell3Cast: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    spell4Cast: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    statPerk0: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    statPerk1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    statPerk2: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    summonSpell1Cast: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    summonSpell2Cast: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    team: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    teamEarlySurrendered: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    teamObjective: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    teamPosition: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    timeCcingOthers: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    timeOfFromLastDisconnect: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    timePlayed: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    timeSpentDisconnected: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalDamageDealt: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalDamageDealtToBuildings: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalDamageDealtToChampions: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalDamageDealtToObjectives: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalDamageDealtToTurrets: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalDamageSelfMitigated: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalDamageShieldedOnTeammates: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalDamageTaken: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalHeal: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalHealOnTeammates: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalPlayerScore: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    totalScoreRank: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    totalTimeCrowdControlDealt: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalTimeSpentDead: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalUnitsHealed: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tripleKills: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    trueDamageDealtPlayer: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    trueDamageDealtToChampions: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    trueDamageTaken: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    turretsKilled: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    unrealKills: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    victoryPointTotal: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    visionScore: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    visionWardsBoughtInGame: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    wardKilled: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    wardPlaced: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    wardPlacedDetector: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    wasAfk: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    wasAfkAfterFailedSurrender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    wasEarlySurrenderAccomplice: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    win: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
}

export default playerStat;
