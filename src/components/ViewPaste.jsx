// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
// import { addToPaste, updateToPaste } from "../redux/PasteSlice";

// const ViewPaste = () => {

//   const{id}=useParams();

//   const allPastes=useSelector
//   ((state)=>state.paste.pastes)

//   const paste= allPastes.filter((p)=>p._id===id)[0]


//   return (
//     <div>
//       <div className="flex flex-row gap-7 place-content-between text-white">
//         <input
//           className="p-2 rounded-2xl mt-2 w-[55%] pl-3 "
//           type="text"
//           placeholder="Enter The Title"
//           value={paste.title}
//           onChange={(e) => settitle(e.target.value)}
//           disabled
//         />
//       </div>
//       {/* //div for textarea */}
//       <div className="mt-8" >
//         <textarea
//           className="rounded-2xl mt-4 min-w-[500px] p-4 text-white"
//           value={paste.content}
//           onChange={(e) => setvelue(e.target.value)}
//           placeholder="enter content"
//           rows={20}
//           disabled
//         ></textarea>
//       </div>
//     </div>
//   );
// };

// export default ViewPaste;


import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Retrieve all pastes from Redux store
  const allPastes = useSelector((state) => state.paste.pastes);

  // Find the paste by ID
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return <div className="text-white">Paste not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex flex-row gap-7 place-content-between text-white mb-4">
        <input
          className="p-2 rounded-2xl w-[55%] pl-3 bg-gray-700 text-white"
          type="text"
          placeholder="Enter The Title"
          value={paste.title}
          disabled
        />
      </div>

      {/* Textarea for content */}
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 bg-gray-700 h-[300px] text-white"
          value={paste.content}
          disabled
          rows={20}
        ></textarea>
      </div>

      {/* Back Button */}
      <div className="mt-5">
        <button
          onClick={() => navigate("/pastes")}
          className="px-6 py-2 mt-4 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
        >
          Back to Pastes
        </button>
      </div>
    </div>
  );
};

export default ViewPaste;
