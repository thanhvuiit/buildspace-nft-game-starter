const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Lucario", "Charizard X", "Charizard Y"],       // Names
    ["https://wiki.pokemonrevolution.net/images/thumb/b/b9/448Lucario-Mega.png/300px-448Lucario-Mega.png", // Images
    "https://wiki.pokemonrevolution.net/images/thumb/c/ca/006XCharizard_X-Mega.png/300px-006XCharizard_X-Mega.png", 
    "https://wiki.pokemonrevolution.net/images/thumb/e/e7/006YCharizard_Y-Mega.png/300px-006YCharizard_Y-Mega.png"],
    [70, 78, 78],                    // HP values
    [145, 130, 104],                       // Attack damage values
    "Arceus", // Boss name
      "https://wiki.pokemonrevolution.net/images/thumb/f/fc/493Arceus.png/300px-493Arceus.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  //let returnedTokenUri = await gameContract.tokenURI(1);
  //console.log("Token URI:", returnedTokenUri);

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done!");
};
  
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