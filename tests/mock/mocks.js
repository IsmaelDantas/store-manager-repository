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

serviceReturn = {
  status: 200,
  message: productsMock,
}

module.exports = {
  productsMock,
  serviceReturn,
};