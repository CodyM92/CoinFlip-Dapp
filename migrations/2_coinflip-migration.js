const contract = artifacts.require("CoinFlip");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(contract, {value: web3.utils.toWei("10","ether"), gas: 6000000});
};
