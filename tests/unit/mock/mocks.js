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

const mockProductsUpdate = [
  {
    id: 1,
    name: "Machado Thor",
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

const salesMock = [
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: "2022-10-12T13:32:57.000Z",
  },
  
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: "2022-10-12T13:32:57.000Z",
  },
];

const mockSaleUnit = [
  {
    "productId": 2,
    "quantity": 10,
    "date": "2022-10-12T13:32:57.000Z"
  },
];

const mockValueUnit = [
  {
    productId: 1,
    quantity: 1,
  },
];

module.exports = {
  productsMock,
  serviceReturn,
  newMockInsert,
  salesMock,
  mockSaleUnit,
  mockProductsUpdate,
  mockValueUnit,
};