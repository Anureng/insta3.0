import React,{useState} from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractRead } from 'wagmi'
import { useAccount } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../contract/details';
import Link from "next/link";

function Navbar() {
  const [setData, setSetData] = useState()
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'ALLUser',
    args:[address]
  })
  console.log(data);


  console.log(data);
  return (
    <div>
        <div className='flex items-center justify-between p-2 bg-gray-700'>
          <Link className='text-white' href="/">
          
        Insta 3.0
       
          </Link>
        
        <div className='text-white'>
          
          {data ? (<div>Hello,{data}</div>):(
            <div>Account need to be Created </div>
          )}
        </div>
        <div>
            <ConnectButton/>
        </div>
        </div>
    </div>
  )
}

export default Navbar