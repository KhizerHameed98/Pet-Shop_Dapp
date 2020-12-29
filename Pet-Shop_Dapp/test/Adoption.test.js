const { assert } = require("chai");

var Adoption = artifacts.require("./Adoption.sol");

contract("Adoption", function (accounts) {
  var adoptionInstance;
  var expectedPetId;
  var expectedAdopter;
  var petId = 8;

  it("adopt a pet using account[0] with pet id 8", function () {
    return Adoption.deployed().then(function (instance) {
        adoptionInstance = instance;
            return adoptionInstance.Adopt(petId,{from:accounts[0]});        
      }).then(function (result) {
            return adoptionInstance.adopters(petId);
      }).then(function(_expected){
        assert.equal(accounts[0], _expected, "Both are same");


      });
  });
  
});

// const Adoption = artifacts.require("Adoption");

// contract("Adoption", (accounts) => {
//  let adoption;
//  let expectedPetId;

//  before(async () => {
//      adoption = await Adoption.deployed();
//  });

//  describe("adopting a pet and retrieving account addresses", async () => {
//    before("adopt a pet using accounts[0]", async () => {
//      await adoption.adopt(8, { from: accounts[0] });
//      expectedAdopter = accounts[0];
//    });
//    it("can fetch the address of an owner by pet id", async () => {
//     const adopter = await adoption.adopters(8);
//     assert.equal(adopter, expectedAdopter, "The owner of the adopted pet should be the first account.");
//   });
//  });
// });