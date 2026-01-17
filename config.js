require("dotenv").config();

module.exports = {
  privateKey: process.env.PRIVATE_KEY,
  rpcUrl: process.env.RPC_URL,
  contractAddress: process.env.CONTRACT_ADDRESS,
  abi: require("./contractABI.json")
};
