db.voos.find(
  {
    vooId: 756807,
  },
  {
    _id: 0,
    "empresas.sigla": 1,
    "empresa.nome": 1,
    passageiros: 1,
  },
);