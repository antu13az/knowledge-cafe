import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddBookmark, handleSetAddTime }) => {
  // console.log(blog);
  const {
    id,
    author,
    cover,
    author_img,
    hashtags,
    posted_date,
    reading_time,
    title,
  } = blog;

  // const {}= blog
  return (
    <div className="singleBlogContainer mb-[75px] border-b-[3px] pb-[5px] border-sky-800">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 justify-between mt-[32px]">
          <img className="w-[60px] h-[60px]" src={author_img} alt="" />
          <div>
            <p className="text-[24px] font-[700] ">{author}</p>
            <p className="text-[#707070] text-[16px]">{posted_date}</p>
          </div>
        </div>

        <div className="text-[#707070] text-[20px] flex items-center gap-2">
          <p>{reading_time} minutes read</p>
          <button onClick={() => handleAddBookmark(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-[40px] font-[700]">{title}</h1>
        <div className="flex items-center gap-3 text-[#707070] font-[700]">
          {hashtags.map((hashtag, index) => (
            <p key={index}>#{hashtag}</p>
          ))}
        </div>
      </div>
      <button
        onClick={() => handleSetAddTime(id,reading_time)}
        className="mt-[21px] underline text-[#6047EC] font-[700]"
      >
        make as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func.isRequired,
  handleSetAddTime: PropTypes.func.isRequired,
};
export default Blog;
