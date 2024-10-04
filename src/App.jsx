import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-red-500 uppercase">
        Vite React Project for Tailwind mane lejoala css
      </h2>
      <Header />
      <Blogs />
    </>
  );
}

export default App;
