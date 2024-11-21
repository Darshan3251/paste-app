// import React from 'react'
// import {NavLink} from 'react-router-dom'
// const NavBar = () => {
//   return (
//   <div className='flex flex-row gap-4 place-content-evenly mt-5'>

//     <NavLink
//     to='/'
//     > Home</NavLink>
//      <NavLink
//     to='/pastes'
//     > paste</NavLink>
//   </div>

//   )
// }

// export default NavBar



import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-blue-400 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
        <div className="text-2xl font-semibold">
          <NavLink
            to="/"
            className="hover:text-gray-300 transition duration-300"
            activeClassName="text-yellow-400"
          >
            Home
          </NavLink>
        </div>

        <div className="flex gap-6">
          <NavLink
            to="/pastes"
            className="hover:text-gray-300 text-lg font-medium transition duration-300"
            activeClassName="text-yellow-400"
          >
            Pastes
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
