const Ballot = artifacts.require("Ballot");
var proposalNames = ['one', 'two', 'three']
module.exports = function (deployer) {
  deployer.deploy(Ballot, proposalNames);
};
