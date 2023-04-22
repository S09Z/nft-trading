import Web3 from "web3";
import NFTCollection from './NFTCollection.json'

const web3 = new Web3(window.ethereum);
const address = 'Ox...' // Replace with the deployed contract address;
const nftContract = new web3.eth.Contract(NFTCollection.abi, address);

export default nftContract;