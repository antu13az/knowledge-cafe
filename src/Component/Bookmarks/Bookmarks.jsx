import PropTypes from "prop-types";

const Bookmarks = ({ addBookmark }) => {
    console.log(addBookmark)
  return (
    <div className="md:w-1/3">
      <h1>BookMarks:{addBookmark.length}</h1>
    </div>
  );
};


Bookmarks.propTypes = {
    addBookmark: PropTypes.object.isRequired,
  };
export default Bookmarks;
