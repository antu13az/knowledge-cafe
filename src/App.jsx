import { useState } from "react";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";
import Footer from "./Footer/Footer";

function App() {
  const [addBookmark, setAddBookmark] = useState([]);
const [addTime,setAddTime] = useState(0)
console.log(addTime)
  const handleAddBookmark = (bookmark) => {
    const newBookmarks = [...addBookmark, bookmark];
    setAddBookmark(newBookmarks);
  };
  const handleSetAddTime = (time)=>{
    setAddTime(addTime + time)
  }
  return (
    <>
      <div className="allContainer">
        <Header />
        <div className="md:flex gap-7">
          <Blogs handleAddBookmark={handleAddBookmark} handleSetAddTime={handleSetAddTime}/>
          <Bookmarks addBookmark={addBookmark} addTime={addTime}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
