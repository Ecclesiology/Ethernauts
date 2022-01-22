// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IDelegate {
  fallback() external
}

contract HackDelegate {
  IDelegate = delegateAddress;
  event Response(bool success, bytes data);

  constructor(IDelegate _delegateAddress){
    delegateAddress = IDelegate(_delegateAddress);
  }

  function callFallback(address _addr) {
    (bool success, bytes memory data) = _addr.call(
      abi.encodeWithSignature("notAFunction()"");
    );

    emit Response(success, data);
  }
}
