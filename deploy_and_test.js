const hre = require("hardhat");
const { PROVIDERS } = require("./addresses");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoanReceiver");
  const flashLoan = await FlashLoan.deploy(PROVIDERS.SEPOLIA_TESTNET);

  await flashLoan.waitForDeployment();
  console.log("Flash Loan Contract deployed to:", await flashLoan.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
