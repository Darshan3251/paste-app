import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
};


export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
     const paste=action.payload;
     state.pastes.push(paste)
     localStorage.setItem('pastes',JSON.stringify( state.pastes))
        toast("Paste Created Successfully")
   
    },
    updateToPaste: (state,action) => {
    const paste=action.payload
    const index=state.pastes.findIndex((item)=>item._id===paste._id)
    if(index>=0){
        state.pastes[index]=paste
        localStorage.setItem('pastes',JSON.stringify( state.pastes))
        toast.success("paste Updated")
    }
},
    resetPaste: (state) => {
      state.paste=[]
      localStorage.removeItem('pastes')
    },
    removeFromPaste:(state,action)=>{
        const pasteID=action.payload
        console.log(pasteID)
        const index=state.pastes.findIndex((item)=>item._id===pasteID)
        if(index>=0){
            state.pastes.splice(index,1)
            localStorage.setItem('pastes',JSON.stringify( state.pastes))
            toast.success("paste deleted")
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetPaste ,removeFromPaste} = pasteSlice.actions

export default pasteSlice.reducer