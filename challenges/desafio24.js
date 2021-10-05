db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $not: { $gt: 600 } } },
      { "empresa.nome": { $not: ["GOL", "AZUL"] } },
      { litrosCombustivel: { $existis: true } },
    ],  
  },
  {
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
  },
);
