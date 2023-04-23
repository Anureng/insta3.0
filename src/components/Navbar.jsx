import React,{useState} from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractRead } from 'wagmi'
import { useAccount } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../contract/details';
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
        <div className='border border-black flex items-center justify-between p-2 bg-gray-700'>
        <div className='text-white'>
        Insta 3.0
        </div>
        <div>
          
        </div>
        <div>
            <ConnectButton/>
        </div>
        </div>
    </div>
  )
}

export default Navbar