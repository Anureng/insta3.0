import React, { useState } from 'react'
import { Web3Storage } from 'web3.storage'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePrepareContractWrite, useContractWrite,useWaitForTransaction } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../contract/details';
function CreatePost() {
    const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [fileurl, setFileurl] = useState()
  const [content, setContent] = useState()
    // Construct with token and endpoint
const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVmMUZlZjFkMjM2NzdFNDNBZjkzNTYwNTNEQjhjZUU5MTgxNkFkRTciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODE5ODYzNTQ4NjksIm5hbWUiOiJJbnN0YTMuMCJ9.L_kd5GZIqGTbBSwZQZCLToPSjcS5NNoXFbUAICRgLbk" })
const captureFile = async (e) => {
    try {
      setFile(e.target.files);
      setFileName(e.target.files[0].name);
      setFileSize(e.target.files[0].size);
      setFileType(e.target.files[0].type);
    } catch (err) {
      console.log(err);
    }
  };


  const { config, error } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'createPost',
    args:[content,fileurl],
    onSuccess(data) {
      notify(data);
    },
  })
  const { write } = useContractWrite(config)

const uploadtoWeb3Storage = async()=>{
const uploadedFile = await client.put(file, {
    name: fileName,
    maxRetries: 3,
    wrapWithDirectory: false,
  });
  console.log(uploadedFile);
  setFileurl(uploadedFile)
  write?.();
}

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
  return (
    <div>
        <div className='space-y-4 py-2 flex flex-col items-center justify-center bg-gray-200'>
      <div className='text-lg font-bold border-b border-black'>Create Post</div>
            <input type="file" onChange={(e)=>captureFile(e)}  />
            <input type="text" placeholder='enter content' className='border border-gray-400 px-1 py-2 rounded-xl' onChange={(e)=>setContent(e.target.value)} />
            <button className='bg-gray-600 text-white px-1 py-2 rounded-xl mb-7' onClick={(e)=>uploadtoWeb3Storage(e)}>click</button>
            {/* <img src={"/"} alt="notjimh" /> */}
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
    </div>
  )
}

export default CreatePost