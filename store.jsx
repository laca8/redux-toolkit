import {configureStore} from '@reduxjs/toolkit'
import posts from './slicer.jsx'
const store = configureStore({
reducer:{
    posts
}
})
export default store