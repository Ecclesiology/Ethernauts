const main = async () => {
  const hackTelephoneFactory = await hre.ethers.getContractFactory("HackTelephone"),
  hackContract = await hackTelephoneFactory.deploy("0x023e90580fCda1c544C7D710c34fb9630041fEd9");
  await hackContract.deployed();
  console.log("Contract deployed to: " + hackContract.address);

  
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
