const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('NftGame');
    const gameContract = await gameContractFactory.deploy(
        ["Noelle", "Nero", "Mugen"],       // Names
        ["https://i.imgur.com/wZ5iwOo.png", // Images
            "https://ih1.redbubble.net/image.979991606.4833/flat,750x1000,075,f.jpg",
            "https://comicvine1.cbsistatic.com/uploads/original/11114/111146486/3710983-mugen.jpg"],
        ["Black Bulls", "Holy Roman Empire", "Ex-Pirate"],
        [900, 1500, 500],                    // HP values
        [200, 150, 125]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);


    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");

    console.log("Done deploying and minting!");

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
