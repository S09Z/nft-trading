import React, { useState } from 'react';  
import MintNFTForm from './components/MintNFTForm'; 
import NFTList from './components/NFTList';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [tokenIds, setTokenIds] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNFTMinted = (tokenId, error) => {
    if (error) {
      setErrorMessage(error.message);
    } else {
      setTokenIds((prevTokenIds) => [...prevTokenIds, tokenId]);
      setErrorMessage('');
    }
  }

  return (
    <div className="max-w-7x1 mx-auto py-6 sm:px-6 lg:px-8">
      <div className='px-4 py-6 sm:px-0'>
        <h2 className='text-2xl font-semibold text-gray-900'>NFT Minting App</h2>
        <div className='mt-8'>
          <MintNFTForm onNFTMinted={handleNFTMinted} />
          <ErrorMessage message={errorMessage} />
          <NFTList tokenIds={tokenIds} />
        </div>
      </div>
    </div>
  );
}

export default App;
