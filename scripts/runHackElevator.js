const main = async () => {
  const hackElevatorFactory = await hre.ethers.getContractFactory("HackCoinFlip");
  const hackElevator = await hackElevatorFactory.deploy("0x14d8005561982fE4A5B954838188447764DFE238");
  await hackElevator.deployed();
  console.log("Contract deployed to: " + hackElevator.address);

  let txn = await hackElevator.getToLastFloor();
  console.log("Going to floor 0...");
  await txn.wait();
  console.log("You have arrived at floor 0");

  let txn2 = await hackElevator.isLastFloor(0);
  console.log("Is this the last floor...?");
  await txn2.wait();
  console.log(`${hackElevator.top()}`);

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
