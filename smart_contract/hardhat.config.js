// https://eth-sepolia.g.alchemy.com/v2/enzf7hOs3Up_tFHoT2YKMQNgBCqyhgB1

const { solidity } = require("ethereum-waffle");

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/enzf7hOs3Up_tFHoT2YKMQNgBCqyhgB1",
      accounts: [
        "0af9f98c65e0baf7f7062e67e41b4b83de112fa02746005e0c5fe7545f539faa",
      ],
    },
  },
};
