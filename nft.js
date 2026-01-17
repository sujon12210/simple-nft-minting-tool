const { ethers } = require("ethers");
const config = require("./config");

async function mintNFT() {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const wallet = new ethers.Wallet(config.privateKey, provider);

  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    wallet
  );

  const tx = await contract.mint(wallet.address);
  const receipt = await tx.wait();

  return receipt.events[0].args.tokenId.toString();
}

module.exports = { mintNFT };
