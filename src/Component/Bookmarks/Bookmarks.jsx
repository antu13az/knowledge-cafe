import PropTypes from "prop-types";

const Bookmarks = ({ addBookmark }) => {
    console.log(addBookmark)
  return (
    <div className="md:w-1/3 bg-[#F3F3F3] p-[30px] rounded-md">
      <h1 className="mb-[20px] text-[24px] font-bold">BookMarks Blog: {addBookmark.length}</h1>
      
        {
            addBookmark.map((bookMark,index)=>(
                <div key={index} className="bg-white p-[20px] rounded-md my-[16px] font-[600] text-[18px]">
                    {bookMark.title}
                </div>
            ))
        }
      
    </div>
  );
};


Bookmarks.propTypes = {
    addBookmark: PropTypes.array.isRequired,
  };
export default Bookmarks;
