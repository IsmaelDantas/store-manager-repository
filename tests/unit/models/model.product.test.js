const { expect } = require("chai");
const sinon = require("sinon");
const modelProduct = require("../../../src/models/model.product");
const connection = require("../../../src/models/database/connection");

const { productsMock } = require("../mock/mocks");
const { beforeEach, afterEach } = require("mocha");

describe("Testing model of products", () => {
  describe("List all products", () => {
    beforeEach(() => {
      sinon.stub(connection, "execute").resolves([productsMock]);
    });

    it("Should return an array with all elements", async () => {
      const result = await modelProduct.getAllModel();

      expect(result).to.be.eq(productsMock);
    });
    it("Should return an array with just one element", async () => {
      const result = await modelProduct.getByIdModel(1);

      expect(result).to.be.eq(productsMock[0]);
    });
    afterEach(sinon.restore)
  });
});