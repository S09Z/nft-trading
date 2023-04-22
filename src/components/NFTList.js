import React, { useState, useEffect } from 'react';
import { getTokenURI } from '../utils/nft'; 

const NFTList = ({ tokenIds }) => {
  const [tokenURIs, setTokenURIs] = useState([]);

  useEffect(() => {
    async function fetchTokenURIs() {
      try {
        const uris = await Promise.all(tokenIds.map((id) => getTokenURI(id)));
        setTokenURIs(uris);
      } catch (error) {
        console.error('Error fetching token URIs:', error.message);
      }
    }

    fetchTokenURIs();
  }, [tokenIds]);

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tokenURIs.map((uri, index) => (
        <li 
          key={index}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <h3 className="text-gray-900 text-sm font-medium">{uri}</h3>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default NFTList;