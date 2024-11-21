import { configureStore } from '@reduxjs/toolkit'
import { pasteSlice } from './redux/PasteSlice'


export const store = configureStore({
  reducer: {
  paste: pasteSlice.reducer, 

  },
})