// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../../interfaces/IBalV2PriceOracle.sol";
import "../IPriceOracle.sol";

interface IFBeets {
  function vestingToken() external view returns (address);
}

contract fBEETSPriceOracle is IPriceOracle {
  using Address for address;

  address vestingToken;
  address fBeetsBar;
  address public immutable BASE_TOKEN;

  constructor(address _fBeetsBar, address _baseToken) {
    require(_fBeetsBar.isContract(), "fBeetsBar is not a contract");
    fBeetsBar = _fBeetsBar;
    vestingToken = IFBeets(_fBeetsBar).vestingToken();
    BASE_TOKEN = _baseToken;
  }

  // _token only needed for IPriceOracle

  function updateSafePrice(address _token) public returns (uint256) {
    return _getSafePrice();
  }

  // _token only needed for IPriceOracle

  function getSafePrice(address _token) public view returns (uint256) {
    return _getSafePrice();
  }

  // _token only needed for IPriceOracle

  function getCurrentPrice(address _token) public view returns (uint256) {
    return _getSafePrice();
  }

  function description() external pure returns (string memory) {
    return "Oracle using balancer TWAP and fBEETS index";
  }

  function VERSION() external view returns (uint256) {
    return uint256(1);
  }

  function _getSafePrice() internal view returns (uint256) {
    IBalV2PriceOracle.OracleAverageQuery[] memory query = new IBalV2PriceOracle.OracleAverageQuery[](1);
    query[0] = IBalV2PriceOracle.OracleAverageQuery(IBalV2PriceOracle.TWAP_VALUE.BPT_PRICE, 120, 10);
    uint256[] memory prices = IBalV2PriceOracle(vestingToken).getTimeWeightedAverage(query);
    uint256 bptFtm = prices[0];
    uint256 fBeetsTotalSupply = IERC20(fBeetsBar).totalSupply();
    uint256 vestingTokenLocked = IERC20(vestingToken).balanceOf(fBeetsBar);
    uint256 bptFBeetsRatio = (vestingTokenLocked * 1e18) / fBeetsTotalSupply;
    uint256 price = (bptFtm * bptFBeetsRatio) / 1e18;
    return price;
  }
}
