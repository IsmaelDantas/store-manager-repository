const { expect } = require("chai");
const sinon = require("sinon");
const serviceProduct = require("../../../src/services/service.product");
const controllerProduct = require("../../../src/controllers/controller.product");
const { serviceReturn, productsMock } = require("../mock/mocks");
const { afterEach } = require("mocha");

describe("Test controller of the products", () => {
  describe("List all products", () => {
    it("Should return an array with all elements", async () => {
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(serviceProduct, "getAllService").resolves(serviceReturn);
      await controllerProduct.getAllController({}, res);
      expect(res.status.calledWith(200)).to.be.eq(true);
      expect(res.json.calledWith(serviceReturn.message)).to.be.eq(true);
    });

    it("Should return a product when a ID is passed", async () => {
      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceProduct, "getByIdService")
        .resolves({ type: null, message: productsMock[0] });
      await controllerProduct.getByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(productsMock[0])).to.be.equal(true);
    });

    it("Should return a error when passing an invalid ID", async () => {
      const req = { params: { id: 999 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceProduct, "getByIdService")
        .resolves({ type: "error", message: "Product not found" });
      await controllerProduct.getByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(false);
      expect(res.json.calledWith(productsMock[0])).to.be.equal(false);
    });

    it("Test if a product is deleted", async () => {
      const res = {};
      const req = { params: { id: 1 } };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceProduct, "deleteService")
        .resolves({ type: null, message: "result" });
      await controllerProduct.deleteController(req, res);
      expect(res.status.calledWith(204)).to.be.eq(true);
      expect(res.json.calledWith()).to.be.eq(true);
    });

    it("Test if a product was changed", async () => {
      const res = {};
      const req = { params: { id: 1 }, body: { name: "Thor" } };
      const { name } = req.body;
      const { id } = req.params;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(serviceProduct, "updateService")
        .resolves({ id: 1, name: "Thor" });
      await controllerProduct.updateController(req, res);
      expect(res.status.calledWith(200)).to.be.eq(true);
    });

    afterEach(sinon.restore);
    
  });
});