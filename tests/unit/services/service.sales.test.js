const { expect } = require("chai");
const { afterEach } = require("mocha");
const sinon = require("sinon");
const modelSales = require("../../../src/models/model.sales");
const serviceSales = require("../../../src/services/service.sales");
const { salesMock } = require("../mock/mocks");

describe("Testing service sales", () => {
  describe("List all products", () => {

    it("Should return an array with all elements", async () => {
      sinon.stub(modelSales, "getAllModel").resolves(salesMock);
      const result = await serviceSales.getAllService();
      expect(result.message).to.be.eq(salesMock);
    });

    it("Should return a product with an ID", async () => {
      sinon.stub(modelSales, "getByIdModel").resolves(salesMock[0]);
      const result = await serviceSales.getByIdServices(2);
      expect(result.message).to.be.eq(salesMock[3]);
    });

  });
  afterEach(sinon.restore)
});