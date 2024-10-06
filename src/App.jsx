import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex gap-7">

      <Blogs />
      <Bookmarks/>
      </div>
    </>
  );
}

export default App;
