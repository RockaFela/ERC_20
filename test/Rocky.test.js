const Rocky = artifacts.require('Rocky');
const RockySale = artifacts.require('RockySale');

contract('Rocky', () => {
    const initAmount = BigInt(75000 * 10**18);
    it('Initialize contract with appropriate value', () => {
        Rocky.deployed().then((FT) => {
            RockySale.deployed().then((FTS) => {
                FT.transfer(FTS.address, initAmount)
            });
        })
    });
});