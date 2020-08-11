pragma solidity 0.5.12;

import "./Ownable.sol";


contract CoinFlip is Ownable {

    bool result;
    uint public houseBalance = 10 ether;
    uint reward;

    modifier costs(uint value) {
        require(msg.value >= value);
        _;
    }

    event FlipCoinResult (address user, bool status, uint reward);

    function flipCoin () public payable costs(100 wei) {
        require(msg.value <= (houseBalance / 3), "The bet amount cannot exceed the payable jackpot!");

        if (random() == 0) {
          //Winning
            result = true;
            reward = msg.value;
            msg.sender.transfer(reward * 2);
        } else {
            result = false;
            reward = -msg.value;
        }
        houseBalance -= reward;
        emit FlipCoinResult(msg.sender, result, reward);
    }

    function withdrawAll() public onlyOwner returns(uint) {
        uint toTransfer = address(this).balance;
        houseBalance = 0;
        msg.sender.transfer(toTransfer);
        return toTransfer;
    }

    function random() private view returns (uint) {
        return block.timestamp % 2;
    }
}
