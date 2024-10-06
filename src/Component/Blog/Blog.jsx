import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  const {
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
    
      <div className="singleBlogContainer">
        <img className="ks" src={cover} alt="" />
        <div className="k">
          <div>
            <img src={author_img} alt="" />
            <div>
              <h2>{author}</h2>
              <p>{posted_date}</p>
            </div>
          </div>
          <p>{reading_time}</p>
        </div>
        <div>
          <h1>{title}</h1>
          {
            hashtags.map((hashtag,index)=>(
              <p key={index}>#{hashtag}</p>
            ))
          }
        </div>
      </div>
    
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
