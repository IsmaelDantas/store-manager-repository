const { expect } = require("chai");
const modelSales = require("../../../src/models/model.sales");
const sinon = require("sinon");
const connection = require("../../../src/models/database/connection");
const { salesMock, mockSaleUnit } = require("../mock/mocks");
const { afterEach } = require("mocha");

describe("Testing sales model", () => {
  describe("List all sales", () => {

    it("Test if returns an array with all sales", async () => {
      sinon.stub(connection, "execute").resolves([salesMock])
      const result = await modelSales.getAllModel();
      expect(result).to.be.eq(salesMock);
    });

    it("Should return an array with 1 element", async () => {
      sinon.stub(connection, "execute").resolves([mockSaleUnit]);
      const result = await modelSales.getByIdModel(1);
      expect(result[0]).to.be.eq(mockSaleUnit[0]);
    });

    afterEach(sinon.restore)
  });
});