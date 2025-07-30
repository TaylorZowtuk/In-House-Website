import sequelize from "./index";

export function aggregateColumns(column_names: string[], aggregateFn: string) {
  const aggregate_attributes: any[] = [];
  for (const column_name of column_names) {
    const aggregate_column = sequelize.fn(
      aggregateFn,
      sequelize.col(column_name)
    );
    aggregate_attributes.push([aggregate_column, column_name]);
  }
  return aggregate_attributes;
}

// I had to separate counting the wins and losses into two separate queries
// because sequelize was giving me some incorrect counts of wins and losses
// for my other attempts (e.g. more wins or losses than total games played)
export function aggregateStatsQuery(wins: boolean) {
  const wins_or_losses = wins ? "wins" : "losses";
  const is = wins ? "Win" : "Fail";
  const sumAttributes = aggregateColumns(
    [
      "assists",
      "championsKilled",
      "goldEarned",
      "numDeaths",
      "pentaKills",
      "timePlayed",
      "totalDamageDealt",
      "totalDamageDealtToChampions",
      "totalDamageTaken",
      "totalHeal",
    ],
    "sum"
  );
  const attributes = [
    ...["name", [sequelize.fn("count", sequelize.col("name")), wins_or_losses]],
    ...sumAttributes,
  ];
  return sequelize.models.playerStat.findAll({
    attributes: attributes,
    group: "name",
    raw: true,
    where: {
      win: is,
    },
  });
}
