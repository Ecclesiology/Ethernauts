require("dotenv").config();

const provider = new hre.ethers.providers.JsonRpcProvider( process.env.RINKEBY_URL );
const wallet = new hre.ethers.Wallet( process.env.PRIVATE_KEY, provider );

const main = async () => {
  const kingAbi = await hre.artifacts.readArtifact("contracts/Delegate\.sol:Delegation");
  const kingContract = await new hre.ethers.Contract("0xd331155cDAe18eB737864989016E4be091aB9E3b", kingAbi.abi, wallet);
  console.log("Delegate contract: " + kingContract.address);


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
