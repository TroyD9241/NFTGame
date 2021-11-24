const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('NftGame');

    const gameContract = await gameContractFactory.deploy(
        ["Noelle", "Nero", "Mugen"],       // Names
        ["https://i.imgur.com/wZ5iwOo.png", // Images
            "https://ih1.redbubble.net/image.979991606.4833/flat,750x1000,075,f.jpg",
            "https://comicvine1.cbsistatic.com/uploads/original/11114/111146486/3710983-mugen.jpg"],
        [900, 1500, 500],                    // HP values
        [200, 150, 125],
        "Corporate Bowser",
        "https://images.nintendolife.com/8ce053855401e/1280x720.jpg",
        10000,
        55
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

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
