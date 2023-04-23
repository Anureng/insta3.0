require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     sepolia: {
//       url: process.env.sepolia_api_key,
//       accounts: [process.env.SEPOLIA_PRIVATE_KEY],
//     },
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts",
//   },
// };

// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config({ path: ".env" });
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     hardhat: {},
//     sepolia: {
//       url: process.env.sepolia_api_key,
//       accounts: [process.env.SEPOLIA_PRIVATE_KEY],
//     },
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts",
//   },
// };

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};

// address:-0x8b7BA41Cd919fdEFDf7a9b756aF932DB80D27Db7
