// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @dev Oracles should always return un the price in FTM with 18 decimals
contract MockPriceOracle {
  uint256 public returnedPrice;

  constructor(uint256 _price) {
    returnedPrice = _price;
  }

  function setReturnedPrice(uint256 _price) external {
    returnedPrice = _price;
  }

  /// @dev This method returns a flashloan resistant price.
  function getSafePrice(address token) external view returns (uint256) {
    return returnedPrice;
  }

  /// @dev This method has no guarantee on the safety of the price returned. It should only be
  //used if the price returned does not expose the caller contract to flashloan attacks.
  function getCurrentPrice(address token) external view returns (uint256) {
    return returnedPrice;
  }

  /// @dev This method returns a flashloan resistant price, but doesn't
  //have the view modifier which makes it convenient to update
  //a uniswap oracle which needs to maintain the TWAP regularly.
  //You can use this function while doing other state changing tx and
  //make the callers maintain the oracle.
  function updateSafePrice(address token) external returns (uint256) {
    return returnedPrice;
  }

  function VERSION() external view returns (uint256) {
    return 1;
  }

  function BASE_TOKEN() external view returns (address) {
    return address(0);
  }
}
