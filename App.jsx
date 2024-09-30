import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {fetchPosts} from './redux/slicer.jsx'
import './App.css'

function App() {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(fetchPosts())
  }, [])
  
const {loading,error,data} = posts
  return (
    <>
    {
      loading && <h1>loading...</h1>
    }
    {
      !loading && error ? <h1>{error}</h1> : null
    }
      {
      !loading && !error && data ? 
        data.map((x,i)=>{
          return(
            <div key={i}>
              <h1>{x.title}</h1>
            </div>
          )
        })
       : null
    } 
    </>
  )
}

export default App
