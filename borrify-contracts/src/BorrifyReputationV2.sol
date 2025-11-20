// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract BorrifyReputationV2 {
    mapping(address = public reputationScore;
    mapping(address = public lastActivity;
    uint256 public constant MAX_SCORE = 100;
    uint256 public constant MIN_SCORE = 10;
    constructor() { reputationScore[msg.sender] = 70; lastActivity[msg.sender] = block.timestamp; }
    function repayOnTime() external { _updateScore(12); }
    function repayEarly() external { _updateScore(20); }
    function nearLiquidation() external { _updateScore(-25); }
    function crossChainRepay() external { _updateScore(15); }
    function _updateScore(int256 change) internal {
        int256 newScore = int256(reputationScore[msg.sender]) + change;
        if (newScore  newScore = 100;
        reputationScore[msg.sender] = uint256(newScore);
        lastActivity[msg.sender] = block.timestamp;
    }
    function getScore(address user) external view returns (uint256) { return reputationScore[user]; }
    function getBorrowAPR(address) external pure returns (uint256) { return 50; }
    function getLTV(address) external pure returns (uint256) { return 8000; }
}
