const productsMock = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const serviceReturn = {
  status: 200,
  message: productsMock,
}

const newMockInsert = [
  {
    id: 4,
    name: "Mock's test",
  },
]

module.exports = {
  productsMock,
  serviceReturn,
  newMockInsert,
};