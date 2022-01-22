// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IDelegate {
  fallback() external
}

contract HackDelegate {
  IDelegate = delegateAddress;

  constructor(IDelegate _delegateAddress){
    delegateAddress = IDelegate(_delegateAddress);
  }

  function callFallback() {
    
  }
}
