const nomeDaEmpresa = "LATAM AIRLINES BRASIL"

db.resumoVoos.insertOne({
  empresa: nomeDaEmpresa,
  totalVoosDomesticos: db.voos.find({
    empresa: nomeDaEmpresa,
    natureza: "Doméstica",
  }).count(),
});

db.resumoVoos.findOne(
  {
    empresa: nomeDaEmpresa,
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
