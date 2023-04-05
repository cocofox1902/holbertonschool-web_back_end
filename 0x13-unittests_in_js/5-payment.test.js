const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./5-payment");

describe("sendPaymentRequestToAPI", () => {
  let consoleSpy;

  beforeEach(() => {
    sinon.stub(Utils, "calculateNumber").returns(10);
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should log the correct message and only call console.log once", () => {
    Utils.sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 10")).to.be.true;
  });

  it("should log the correct message and only call console.log once", () => {
    Utils.sendPaymentRequestToAPI(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 10")).to.be.true;
  });
});
