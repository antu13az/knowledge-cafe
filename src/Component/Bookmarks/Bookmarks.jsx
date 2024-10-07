import PropTypes from "prop-types";

const Bookmarks = ({ addBookmark, addTime }) => {
  // console.log(addBookmark);
  return (
    <div className="md:w-1/3">
      <h2 className="text-[#6047ec] px-[50px] py-[20px] font-[700] bg-[#efecfd] text-[24px] mb-[24px] roun">
        Spent time on read: {addTime}
      </h2>
      <div className=" bg-[#F3F3F3] p-[30px] rounded-md">
        <h1 className="mb-[20px] text-[24px] font-bold">
          BookMarks Blog: {addBookmark.length}
        </h1>

        {addBookmark.map((bookMark, index) => (
          <div
            key={index}
            className="bg-white p-[20px] rounded-md my-[16px] font-[600] text-[18px]"
          >
            {bookMark.title}
          </div>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  addBookmark: PropTypes.array.isRequired,
  addTime: PropTypes.number.isRequired,
};
export default Bookmarks;
