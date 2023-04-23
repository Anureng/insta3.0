const hre = require("hardhat");

async function main() {
  const Insta = await hre.ethers.getContractFactory("Insta");
  const insta = await Insta.deploy();

  await insta.deployed();

  console.log(`Lock with 1 ETH and deployed to ${insta.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
