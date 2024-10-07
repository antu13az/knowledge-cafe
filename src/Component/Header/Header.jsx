import navImg from "../../assets/images/profile.png";

const Header = () => {
  return (
    <nav className="flex items-center justify-between  border-b-2 mb-[32px] pb-4 mt-[10px]">
      <h1 className="text-[40px] font-bold">Knowledge Cafe</h1>
      <img src={navImg} alt="" />
    </nav>
  );
};

export default Header;
