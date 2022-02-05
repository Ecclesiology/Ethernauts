// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IElevator {
  function goTo(uint _floor) external;
}

contract HackElevator {
  bool public firstFloor = false;
  IElevator elevator;

  constructor(IElevator _elevator){
    elevator = IElevator(_elevator);
  }

}
