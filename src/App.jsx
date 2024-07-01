import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmarks, setbookmarks ]=useState([]);
  const bookmarkHandler = (blog) => {
    const newBookmarks=[...bookmarks, blog];
    setbookmarks(newBookmarks);
  }

  const [readTime, setReadTime ]=useState(0);
  const timeHandler = (time) => {
    setReadTime(readTime+parseFloat(time));
    console.log(readTime);
  }

  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex gap-5">
        <Blogs
          bookmarkHandler={bookmarkHandler}
          timeHandler={timeHandler}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readTime={readTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
