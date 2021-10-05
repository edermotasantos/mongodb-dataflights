db.voos.findOne(
  {
    $and: [
      {
        "empresa.nome": {
          $in: [
            "DELTA AIRLINES",
            "AMERICAN AIRLINES",
          ],
        },
      },
      { aeroportoDeOrigem: "SBGR" },
    ],
  },
  {
    _id: 0,
    vooId: 1,
  },
);
