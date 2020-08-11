/* const CoinFlip = artifacts.require("CoinFlip");
const truffleAssert = require("truffle-assertions");

contract ("CoinFlip", async function(accounts) {

  let instance;

  before(async function(){
    instance = await CoinFlip.deployed();
  })
    it("Should ", async function(){
      await truffleAssert.fails(instance.createPerson("Bob", 200, 190, {value: web3.utils.toWei("1", "ether")}), truffleAssert.ErrorType.REVERT);
    });
