pragma solidity ^0.5.3;

contract Adoption{

    address [16] public adopters;

    function Adopt(uint petId) public returns (uint)
    {
        require(petId>=0 && petId<16);
        adopters[petId] = msg.sender;

        return petId;
    }

    function getAdopters() public view returns(address[16] memory) {

        return adopters;
        
    }

}