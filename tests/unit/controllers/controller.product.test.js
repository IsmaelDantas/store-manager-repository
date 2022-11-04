const { expect } = require("chai");
const sinon = require("sinon");

const serviceProduct = require("../../../src/services/service.product");
const controllerProduct = require('../../../src/controllers/controller.product');

const { serviceReturn, productsMock, newMockInsert } = require("../mock/mocks");

describe("Test controller of the products", () => {
  describe("List all products", () => {
    it("Should return an array with all elements", async () => {
      const res = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(serviceProduct, "getAllService").resolves(serviceReturn);
      await controllerProduct.getAllController({}, res);
      expect(res.status.calledWith(200)).to.be.eq(true);
      expect(res.json.calledWith(serviceReturn.message)).to.be.eq(true);
    });

    it("Should return a product when a ID is passed", async () => {
      const req = { params: { id: 1 } }
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(serviceProduct, "getByIdService").resolves({ type: null, message: productsMock[0] });
      await controllerProduct.getByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(productsMock[0])).to.be.equal(true);
    });

    it("Should return an error when a ID is invalid", async () => {
      const req = { params: { id: 999 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(serviceProduct, "getByIdService").resolves({ type: 'error', message: 'Product not found' });
      await controllerProduct.getByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(false);
      expect(res.json.calledWith(productsMock[0])).to.be.equal(false);
    });
  });
  afterEach(sinon.restore);
  describe('Test the insert function', () => {
    it('Test if inserting a new product returns an id and a name', async () => {
      const res = {};
      const req = { body: 4 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(serviceProduct, 'insertService').resolves({ type: null, message: 4 });
      await controllerProduct.insertController(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it("Test if an product is insert without data returns a error", async () => {
      const res = {};
      const req = { body: 4 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceProduct, "insertService")
        .resolves({ type: 'error', message: 4 });
      await controllerProduct.insertController(req, res);
      expect(res.status.calledWith(201)).to.be.equal(false);
      expect(res.json.calledWith(newMockInsert[0])).to.be.equal(false);
    });
  });
});