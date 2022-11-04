const { expect } = require("chai");
const sinon = require("sinon");
const modelProduct = require("../../../src/models/model.product");
const serviceProduct = require('../../../src/services/service.product')
const connection = require("../../../src/models/database/connection");

const { productsMock, newMockInsert } = require("../mock/mocks");
const { afterEach } = require("mocha");

describe("Testing service of products", () => {

  describe("Listing all products", () => {

    it("Should return an array with all elements", async () => {
      sinon.stub(modelProduct, 'getAllModel').resolves(productsMock);

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
      expect(result.message).to.eq('Product not found');
    });
  });

  describe('Test insert a new product', () => {
    it('Test if inserting a new product return id and name', async () => {
      sinon.stub(modelProduct, 'insertModel').resolves([newMockInsert]);
      const result = await serviceProduct.insertService({ name: "Mock's test" });
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal([newMockInsert]);
    })
  })

  afterEach(sinon.restore);
});