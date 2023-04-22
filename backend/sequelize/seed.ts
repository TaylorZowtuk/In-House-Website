import sequelize from "./index";

async function seed() {
  console.log(
    "Will rewrite the SQLite example database, adding some dummy data."
  );

  await sequelize.sync({ force: true });

  const taz: any = await sequelize.models.user.create({
    username: "taz",
  });
  const znap: any = await sequelize.models.user.create({ username: "znap" });

  // await taz.createAccount({
  //   accountId: "L6KyH_4QhNoPw8vwp9GSqgMIx-FMA7oqEfHERtJow3OBVQ",
  //   name: "Top Channel10 M4",
  //   id: "iil0P5DgUX6zAS9OMolOJRbCb9-mlrQh9sHey8dJlVSVAeQ",
  //   puuid:
  //     "oXeo1UyNUoZ8i3zX1Zo68QvxNz4puNzCKoQgF-M-1aWlqf30xocMpvusT-CKmuIalDnC3ADslhMV1A",
  // });
  // await znap.createAccount({
  //   accountId: "txn2qqbhLjucp53EAG27xHKwMW53jY0_CWG3Ce0Zd9ZNQw",
  //   name: "King Nap",
  //   id: "ZaHdFS80zjOmJl3mKs0gzaA9JlfnflqV-aKH9Xkx4t8OJ4M",
  //   puuid:
  //     "rJTC2oeUZmYJ_vfiTYFcsif4NlTUy_RcslSlamIhgMlJKSQN8RQXBCFdkpTr9OOOxjO678v4ItT3tw",
  // });

  console.log("Seeding done!");
  sequelize.models.account.findAll().then((accounts) => {
    console.log("Accounts:", accounts);
  });
}

seed();
