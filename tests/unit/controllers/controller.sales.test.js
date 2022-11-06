const { expect } = require("chai");
const sinon = require("sinon");
const serviceSales = require("../../../src/services/service.sales");
const controllerSales = require("../../../src/controllers/sales.controller");
const { salesMock, mockSaleUnit, mockValueUnit } = require("../mock/mocks");
const { afterEach } = require("mocha");

describe('Test sales controller', () => {
  describe('List all items', () => {
    it("Should return an array with all elements", async () => {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceSales, "getAllService")
        .resolves({ type: null, message: salesMock });
      await controllerSales.getAllController(req, res);
      expect(res.status.calledWith(200));
      expect(res.json.calledWith(salesMock));
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

    it("Should return a error whjen passing an invalid ID", async () => {
      const req = { params: { id: 99 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceSales, "getByIdService")
        .resolves({ type: "error", message: "Sale not found" });

      await controllerSales.getByIdController(req, res);

      expect(res.status.calledWith(404)).to.be.equal(true);
      expect(res.json.calledWith({ message: "Sale not found" }));
    });

    it("Should successfully register a new sale", async () => {
      const res = {};
      const req = { body: mockValueUnit };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(serviceSales, 'insertService').resolves({ type: null, message: 10 });
      await controllerSales.insertController(req, res);
      expect(res.status.calledWith(201)).to.be.eq(true)
    });

    it("Should return a error when registering an invalid sale", async () => {
      const res = {};
      const req = { body: {} };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceSales, "insertService")
        .resolves({ type: 'error', message: 10 });
      await controllerSales.insertController(req, res);
      expect(res.status.calledWith(404)).to.be.eq(true);
    });
    afterEach(sinon.restore);
  });
});