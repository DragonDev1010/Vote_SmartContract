
const Ballot = artifacts.require("Ballot");
var proposalNames = [
  '0x7465737400000000000000000000000000000000000000000000000000000000', 
  '0x7465737400000000000000000000000000000000000000000000000000000000', 
  '0x7465737400000000000000000000000000000000000000000000000000000000'
]
module.exports = function (deployer) {
  deployer.deploy(Ballot, proposalNames);
};
