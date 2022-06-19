import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Profile {}

interface State {
   profile: Profile
}

interface Word {
   id: string
   category: string
   complexity: string
   letters: string
}

interface Game {
   level: Word
   letters: string[]
   answerWord: string

   hints: number
}

const initialState: State = {
   profile: {},
}

export const stateSlice = createSlice({
   name: 'state',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      // builder.addCase()
   },
})

export const {} = stateSlice.actions

export default stateSlice.reducer
