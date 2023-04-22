import React, { useState } from 'react';
import { mintNFT } from '../utils/nft';

const MintNFTForm = ({ onNFTMinted }) => {
  const [tokenURI, setTokenURI] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { tokenId, error } = await mintNFT(tokenURI);
    onNFTMinted(tokenId);
    if (!error) {
      alert('NFT minted successfully');
    }
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='tokenURI' className='block text-sm font-medium text-gray-700'>
          Token URI:
        </label>
        <input 
          type="text"
          id="tokenURI"
          value={tokenURI}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={(e) => setTokenURI(e.target.value)}
        />
      </div>
      <button 
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Mint NFT'}
      </button>
    </form>
  )
}

export default MintNFTForm;