db.voos.findOne(
  { 
    rtk: { $existis: false },
  },
  {
    _id: 0,
    vooId: 1,
  },
);
