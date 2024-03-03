
import PostsList from './store/slices/posts/PostsList'
import AddPostForm from './store/slices/posts/AddPostForm'





function App() {



  return (
    
    
    <main className='w-[100vw] h-[100vh] flex items-center justify-center gap-[200px] bg-[#ccc] '>
     
      <div ><AddPostForm/></div>
     <div className=' p-[10px]  rounded-[10px] overflow-scroll h-[80%]'> <PostsList/></div>

    </main>
    
  )
}

export default App
