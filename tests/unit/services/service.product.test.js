const { expect } = require("chai");
const sinon = require("sinon");
const modelProduct = require("../../../src/models/model.product");
const serviceProduct = require("../../../src/services/service.product")
const connection = require("../../../src/models/database/connection");

const { productsMock } = require("../mock/mocks");
const { afterEach } = require("mocha");

describe("Testing service of products", () => {

  describe("Listing all products", () => {

    it("Should return an array with all elements", async () => {
      sinon.stub(modelProduct, "getAllModel").resolves(productsMock);
      const result = await serviceProduct.getAllService();
      expect(result.message).to.be.eq(productsMock);
    });

    it("Should return a product when passing an ID", async () => {
      sinon.stub(modelProduct, "getByIdModel").resolves(productsMock[0]);
      const result = await serviceProduct.getByIdService(1);
      expect(result.message).to.be.eq(productsMock[0]);
    });

    it("Should return a message if none product exists", async () => {
      sinon.stub(modelProduct, "getByIdModel").resolves(undefined);
      const result = await serviceProduct.getByIdService(1);
      expect(result.message).to.eq("Product not found");
    });
   
    it("Test if deleted a productTesta se deletou um produto", async () => {
      sinon
        .stub(modelProduct, "deleteModel")
        .resolves({ type: null, message: 1 });
      const result = await serviceProduct.deleteService(1);
      expect(result.type).to.be.eq(null);
    });
   
    it("Test if a product was not deletedTesta se não deletou um produto", async () => {
      sinon.stub(modelProduct, "deleteModel").resolves(0);
      const result = await serviceProduct.deleteService(99);
      expect(result.type).to.be.eq("error");
    });
  });

  afterEach(sinon.restore);

});