import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    loading:false,
    data:[],
    error:''
}
export const fetchPosts = createAsyncThunk('fetchPosts',async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data 
})

const postsSlicer = createSlice({
    name:'posts',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.loading = false,
            state.data = action.payload,
            state.error = ''
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.loading=false,
            state.data = [],
            state.error=action.error.message

        })
    }

})

export default postsSlicer.reducer