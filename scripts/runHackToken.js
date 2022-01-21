require("dotenv").config();
const tokenAbi = require("artifacts/contracts/Token\.sol/Token.json");

const main = async () => {
  const hackToken = await new hre.ethers.Contract("0xb5C48a5a55C5af9Ef83dA548C8Cd4766F0da1b7E", tokenAbi.abi, process.env.PRIVATE_KEY);
  await hackToken.deployed();
  console.log("Token contract: " + hackToken.address);

  let txn = await hackToken.transfer(hackToken.address, "300")
  await txn.wait();
  console.log("Transfer function complete.");
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
