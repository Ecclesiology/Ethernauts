require("dotenv").config();
const tokenAbi = hre.artifacts.readArtifact("Token")
const provider = new hre.ethers.providers.JsonRpcProvider( process.env.RINKEBY_URL );
const wallet = new hre.ethers.Wallet( process.env.PRIVATE_KEY, provider );

const main = async () => {
  const hackToken = await new hre.ethers.Contract("0xF221B392AB7F89D32b941fFdE6b3Ea271AA30587", tokenAbi.abi, wallet);
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
