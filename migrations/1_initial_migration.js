const Rocky = artifacts.require("./RockyICO/Rocky");
const RockySale = artifacts.require("./RockyICO/RockySale");

module.exports = function (deployer) {
  deployer.deploy(Rocky).then(() => {
    deployer.deploy(RockySale, Rocky.address);
  });
  // If this code doesn't work, to deploy the contract token sale
  // we have to copy the contract tokenn address and paste here
  // deployer.deploy(RockySale, "0xBC0484Ab69982738BcD5FA45947Fc9203551bB7c");
};