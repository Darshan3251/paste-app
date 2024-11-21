// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromPaste } from "../redux/PasteSlice";
// import toast from 'react-hot-toast';


// const Paste = () => {
//   // console.log('Pastes:', pastes);

//   const pastes = useSelector((state) => state.paste.pastes);
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch();

//   const filterdData = pastes.filter((paste) =>
//     paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   console.log("Pastes:", pastes);
//   console.log("Filtered Data:", filterdData);

//   function handalDelete(pasteID) {
//     dispatch(removeFromPaste(pasteID));
//   }


//   function handleShare(paste) {
//     if (navigator.share) {
//       navigator.share({
//         title: paste.title,
//         text: paste.content,
//         url: window.location.href,
//       }).then(() => {
//         toast.success('Paste shared successfully!');
//       }).catch((error) => {
//         toast.error('Error sharing the paste');
//       });
//     } else {
//       toast.error('Sharing is not supported on this device');
//     }
//   }



//   return (
//     <div>
//       <input
//         className="p-2 rounded-2xl min-w-[500px] mt-3 pl-3"
//         value={searchTerm}
//         type="search"
//         placeholder="Search for a paste"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="flex flex-col mt-3 gap-5 text-red-500">
//         {filterdData.length > 0 &&
//           filterdData.map((paste) => {
//             return (
//               <div key={paste?._id}>
//                 <div className="border">
//                   <div className="">{paste.title}</div>
//                   <div className="mt-4">{paste.content}</div>
//                   <div className="flex flex-row place-content-evenly gap-4 p-2 mt-5">
//                     <button>
//                     <a href={`/?pasteId=${paste?._id}`}>
//                       Edit
//                     </a>
//                     </button>
//                     <button
//                       onClick={() => {
//                         navigator.clipboard.writeText(paste?.content);
//                         toast.success("Copied to clipboard");
//                       }}
//                     >
//                       Copy
//                     </button>

//                     <button onClick={() => handleShare(paste)}>Share</button>
//                     <button onClick={() => handalDelete(paste?._id)}>
//                       Delete
//                     </button>
//                     <button>
//                     <a href={`/pastes/${paste?._id}`}>
//                       View
//                     </a>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default Paste;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPaste } from "../redux/PasteSlice";
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteID) {
    dispatch(removeFromPaste(pasteID));
  }

  function handleShare(pasteContent) {
    if (navigator.share) {
      navigator.share({
        title: 'Shared Paste',
        text: pasteContent,
        url: window.location.href,
      })
        .then(() => toast.success('Successfully shared!'))
        .catch((err) => toast.error('Error sharing the paste.'));
    } else {
      toast.error('Share not supported on this device/browser.');
    }
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col items-center space-y-4">
        {/* Search Bar */}
        <input
          className="p-3 rounded-lg shadow-md w-1/2 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          type="search"
          placeholder="Search for a paste..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        

        {/* Pastes List */}
        <div className="w-full mt-6 space-y-6">
          {filteredData.length > 0 ? (
            filteredData.map((paste) => (
              <div
                key={paste?._id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="font-semibold text-xl text-gray-800">
                  {paste.title}
                </div>
                
                
                <div className="mt-4 text-gray-600">{paste.content}</div>
                {/* Display the Date */}
                <div className="text-sm text-gray-500 mt-7 ">
                  Created on: {new Date(paste.createdAt).toLocaleDateString()}
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <div className="flex gap-4">
                    <button className="text-blue-500 hover:text-blue-700 transition-colors">
                      <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 transition-colors"
                      onClick={() => handleDelete(paste?._id)}
                    >
                      Delete
                    </button>
                    <button className="text-green-500 hover:text-green-700 transition-colors">
                      <a href={`/pastes/${paste?._id}`}>View</a>
                    </button>
                    <button
                      className="text-yellow-500 hover:text-yellow-700 transition-colors"
                      onClick={() => handleShare(paste?.content)}
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No pastes found...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paste;
