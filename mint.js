const { mintNFT } = require("./nft");

async function start() {
  try {
    const tokenId = await mintNFT();
    console.log("Minted NFT with Token ID:", tokenId);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

start();
