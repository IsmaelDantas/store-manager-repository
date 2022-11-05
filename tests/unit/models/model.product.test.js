const { expect } = require("chai");
const sinon = require("sinon");
const modelProduct = require("../../../src/models/model.product");
const connection = require("../../../src/models/database/connection");

const { productsMock } = require("../mock/mocks");
const { afterEach } = require("mocha");

describe("Testing model of products", () => {
  describe("List all products", () => {
    
    it("Should return an array with all elements", async () => {
      sinon.stub(connection, "execute").resolves([productsMock]);
      const result = await modelProduct.getAllModel();
      expect(result).to.be.eq(productsMock);
    });
    
    it("Should return an array with just one element", async () => {
      sinon.stub(connection, "execute").resolves([productsMock]);
      const result = await modelProduct.getByIdModel(1);
      expect(result).to.be.eq(productsMock[0]);
    });
    
    it("Test if the product was deleted", async () => {
      sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
      const result = await modelProduct.deleteModel(1);
      expect(result).to.be.eq(1);
    });
    
    it("Test if the product was edited", async () => {
      sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
      const result = await modelProduct.updateModel("Thor", 1);
      expect(result.id).to.be.eq(1);
    });
    
    it("Test if the product was not edited", async () => {
      sinon.stub(connection, "execute").resolves([{ affectedRows: 0 }]);
      const result = await modelProduct.updateModel("Thor", 99);
      expect(result).to.be.eq(null);
    });
    
    afterEach(sinon.restore);
  });
});