import React from 'react'
import { useContractRead } from 'wagmi'
import { useAccount } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../contract/details';
function SeperatePost() {
    const { address, isConnecting, isDisconnected } = useAccount()
    const { data, isError, isLoading } = useContractRead({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'ALLPost',
      args:[address]
    })
    console.log(data);
  return (
    <div>{data}</div>
  )
}

export default SeperatePost