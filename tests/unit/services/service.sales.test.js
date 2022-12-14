const { expect } = require("chai");
const { afterEach } = require("mocha");
const sinon = require("sinon");
const modelSales = require("../../../src/models/model.sales");
const serviceSales = require("../../../src/services/service.sales");
const { salesMock, mockValueUnit } = require("../mock/mocks");

describe("Testing service sales", () => {
  describe("List all products", () => {

    it("Should return an array with all elements", async () => {
      sinon.stub(modelSales, "getAllModel").resolves(salesMock);
      const result = await serviceSales.getAllService();
      expect(result.message).to.be.eq(salesMock);
    });

    it("Should return a product when passing an ID", async () => {
      sinon.stub(modelSales, "getByIdModel").resolves(salesMock);
      const result = await serviceSales.getByIdService(1);
      expect(result.type).to.be.eq(null);
    });

    it('Test if a sale was inserted', async () => {
      sinon.stub(modelSales, 'insertModelSale').resolves(salesMock[0]);
      const result = await serviceSales.insertService(mockValueUnit);
      expect(result.type).to.be.eq(null)
    })

  });
  afterEach(sinon.restore)
});