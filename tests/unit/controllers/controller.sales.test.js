const { expect } = require("chai");
const sinon = require("sinon");
const serviceSales = require("../../../src/services/service.sales");
const controllerSales = require("../../../src/controllers/sales.controller");
const { salesMock, mockSaleUnit } = require("../mock/mocks");

describe('Test sales controller', () => {
  describe('List all items', () => {

    it("Should return an array with all elements", async () => {
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(serviceSales, "getAllService").resolves(salesMock);
      await controllerSales.getAllController({}, res);
      expect(res.status.calledWith(200)).to.be.eq(true);
      expect(res.json.calledWith(salesMock.message)).to.be.eq(true);
    });

    it('Should return with just only 1 item', async () => {
      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceSales, "getByIdService")
        .resolves({ type: null, message: mockSaleUnit[0] });
      await controllerSales.getByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mockSaleUnit[0])).to.be.equal(true);
    });
  });
});