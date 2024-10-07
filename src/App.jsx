import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
    <div className="allContainer">

      <Header />
      <div className="md:flex gap-7">

      <Blogs />
      <Bookmarks/>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default App;
