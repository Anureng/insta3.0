import React,{useState} from 'react'
import { useContractRead } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../contract/details'
import Image from 'next/image'

function AllPost() {
//   const [setUrl, setSetUrl] = useState([{
// WhoCreatedPost:"",
// imageUrl:"",
// text:""
//   }])

    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'AllPostByEveryone',
      })
      const details=["whoCreatedPost","imageUrl","text"];
      // data.map((details)=>{
      //  console.log("This is from line13" +details.imageUrl);
      // //  setSetUrl(() => details.imageUrl)
      // })
      console.log(data);
      // setSetUrl(WhoCreatedPost)
      const arrayDataItems = data?.map(el => 
        <div className='lg:p-8 lg:text-lg ' key={el.id}>
        Created User :- {el.WhoCreatedPost}
          {/* <span> Description :- {el.imageUrl}</span> <br /> */}
         <img className='h-96' src={"https://ipfs.io/ipfs/"+el.imageUrl} alt="" />
         Content :- {el.text}
        </div>
      )
      // setSetUrl(data)
    
  return (
    <div className='flex  items-center justify-center flex-col bg-gray-200'>
    <div className='text-xl font-bold border-b border-black '>All  Post</div>
    <div className=''>{arrayDataItems}</div>
    </div>
  )
}

export default AllPost