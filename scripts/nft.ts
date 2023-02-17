import { ethers } from "hardhat";

async function main() {
    const nftContract = await ethers.getContractFactory("MyNft");

    const [owner, addr1, addr2] = await ethers.getSigners();
    
    const deployedNFTContract = await nftContract.deploy();
        
    await deployedNFTContract.deployed();
  
    console.log("NFT Contract Address:", deployedNFTContract.address);

    const IPFS = "QmWSQyZgSaj64tq5yYKP8ccUEtXuKowz9RySAtECgKyE1X";

    const MyMint = await deployedNFTContract.safeMint(owner.address,IPFS);
    console.log(MyMint)
}




main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
