import React,{useState} from 'react'
import { usePrepareContractWrite, useContractWrite, useContract } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../contract/details'
import Image from 'next/image'
import Link from "next/link";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateUser() {
    
 const [name, setName] = useState()
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "CreateUser",
        args:[name],
        onError(error) {
          notifyError(error);
        },
        onSuccess(data) {
          notify(data);
        },
        
      })
      const notify = () => toast.success(' Post is Created', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition:Zoom
        });
        const notifyError=()=>toast.error(' Post is not Created', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition:Zoom
          });
      console.log(CONTRACT_ABI);
      
      const { write } = useContractWrite(config)
      
  return (
    <>
    <div className=' h-[43rem] flex flex-col lg:flex-row lg:space-x-10  space-y-10 items-center justify-center  w-screen bg-gray-200'>
      <div>
        <Image className='rounded-xl' width={350} height={200} src="/account.jpg" alt='None'/>
      </div>
      <div className='flex flex-col items-center justify-center  space-y-4  bg-gray-400 p-8 rounded-xl  '>
        <div className='text-lg font-bold border-b border-black'>
Create  account
        </div>
        <div className='space-y-4'>

    <input type="text  " className="border border-gray-400 px-2 py-1 rounded-xl"  onChange={(e)=>setName(e.target.value)}  placeholder='enter your name' />
   <Link href="/allPost">
   <button className=' ml-10 text-white cursor-pointer bg-gray-600 px-2 py-1 rounded-xl' disabled={!write} onClick={() => write?.()}>
      Click
    </button>   
   </Link>

    <div>You need metamask to create the account</div>
        </div>
      </div>
      <Link className='bg-gray-400 px-1 py-2 rounded-xl' href="/allPost">
      Go to the Post Page
      </Link>
    </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
  
  </>
  )
}

export default CreateUser