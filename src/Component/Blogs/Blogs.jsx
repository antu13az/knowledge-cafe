import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddBookmark,handleSetAddTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog, index) => (
        <Blog blog={blog} key={index} handleAddBookmark={handleAddBookmark} handleSetAddTime={handleSetAddTime}/>
       
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddBookmark: PropTypes.func.isRequired,
  handleSetAddTime: PropTypes.func.isRequired,
};
export default Blogs;
