import { useState } from "react";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";
import Footer from "./Footer/Footer";

function App() {
  const [addBookmark, setAddBookmark] = useState([]);

  const handleAddBookmark = (bookmark) => {
    const newBookmarks = [...addBookmark, bookmark];
    setAddBookmark(newBookmarks);
  };
  return (
    <>
      <div className="allContainer">
        <Header />
        <div className="md:flex gap-7">
          <Blogs handleAddBookmark={handleAddBookmark} />
          <Bookmarks addBookmark={addBookmark} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
