import React,{useState} from 'react'
import { usePrepareContractWrite, useContractWrite, useContract } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../contract/details'
function CreateUser() {
    
 const [name, setName] = useState()
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "CreateUser",
        args:[name],
        onError(error) {
          console.log('Error', error)
        },
      })
      console.log(CONTRACT_ABI);
      
      const { write } = useContractWrite(config)
  return (
    <>
    <div>
      <div className='flex flex-col items-center justify-center  space-y-4 p-2'>
        <div className='text-lg font-bold border-b border-black'>
Create  account
        </div>
        <div className='space-y-4'>

    <input type="text  " className="border border-gray-400 px-2 py-1 rounded-xl"  onChange={(e)=>setName(e.target.value)}  placeholder='enter your name' />
    <button className=' ml-10 cursor-pointer bg-gray-600 px-2 py-1 rounded-xl' disabled={!write} onClick={() => write?.()}>
      Feed
    </button>
        </div>
      </div>
    </div>
  
  </>
  )
}

export default CreateUser