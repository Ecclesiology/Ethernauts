const main = async () => {
  const hackForceFactory = await hre.ethers.getContractFactory("HackCoinFlip"),
  hackForce = await hackForceFactory.deploy("0xE681d8234A3a3217B8c2478a7a29a44428Ef442b");
  await hackForce.deployed();
  console.log("Contract deployed to: " + hackForce.address);

  
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
