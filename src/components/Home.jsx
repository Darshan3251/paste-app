
// import React, { useEffect, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from "react-router-dom";
// import { addToPaste, updateToPaste } from '../redux/PasteSlice';

// const Home = () => {

//     const [title,settitle]=useState('')
//     const [value,setvelue]=useState('')
//     const [searchParams,setparams]=useSearchParams();

//     const pasteId= searchParams.get('pasteId')
//     const dispatch=useDispatch();

//     const allPastes=useSelector((state)=>state.paste.pastes)

//     useEffect(()=>{
//         if (pasteId) {
//             const paste = allPastes.find((p)=>p._id===pasteId)
//             settitle(paste.title)
//             setvelue(paste.content)
//         }
//     },[pasteId])

//     function createPaste(){
//         const paste={
//             title:title,
//             content:value,
//             _id:pasteId||
//             Date.now().toString(36),
//             createdAt:new Date().toISOString(),
//         }

//         if (pasteId) {
//             //update
//             dispatch(updateToPaste(paste))
         
//         }else{
//             //create
//             dispatch(addToPaste(paste))
//         }

//         //after creation and upadtion
//         settitle('')
//         setvelue('')
//         setparams({})

//     }


//   return (
//     <div>
//     <div className='flex flex-row gap-7 place-content-between'>
//         <input
//         className='p-2 rounded-2xl mt-2 w-[55%] pl-3 '
//             type='text'
//             placeholder='Enter The Title'
//             value={title}
//             onChange={(e)=>settitle(e.target.value)}

//         />
//         <button className='p-2 mt-2 rounded-2xl '
//         onClick={createPaste}
//         >
//             {
//                 pasteId?"Upadate My Paste":"Create New Paste"
//             }
//         </button>

//     </div>
//     {/* //div for textarea */}
//             <div className='mt-8'>
//                 <textarea
//                 className='rounded-2xl mt-4 min-w-[500px] p-4'
//                 value={value}
//                 onChange={(e)=>setvelue(e.target.value)}
//                 placeholder='enter content'
//                 rows={20}

//                 ></textarea>
//             </div>

//     </div>
//   )
// }

// export default Home


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/PasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setParams] = useSearchParams();

  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // Update
      dispatch(updateToPaste(paste));
    } else {
      // Create
      dispatch(addToPaste(paste));
    }

    // Reset after creation/updation
    setTitle("");
    setValue("");
    setParams({});
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg space-y-6">
        <div className="flex justify-between items-center space-x-4">
          <input
            className="p-4 rounded-xl w-full bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="text"
            placeholder="Enter The Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="px-5 py-1.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300"
            onClick={createPaste}
          >
            {pasteId ? "Update My Paste" : "Create New Paste"}
          </button>
        </div>

        <div className="mt-8">
          <textarea
            className="w-full p-4 rounded-xl bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter content"
            rows={12}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
