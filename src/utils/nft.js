import nftContract from "../contracts/nft-collection";

export async function mainNFT(tokenURI) {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    const result = await nftContract.methods.mainNFT(account, tokenURI).send({ from: account });
    const tokenId = result.eventsTransfer.returnValues.tokenId;
    return { tokenId, error: null };
  } catch (error) {
    console.error('Error minting NFT:', error.message);
    return { tokenId: null, error };
  }
}

export async function getTokenURI(tokenId) {
  return await nftContract.methods.tokenURI(tokenId).call();
}