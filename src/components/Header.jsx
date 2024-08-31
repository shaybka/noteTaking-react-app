import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/"> Notify for me</Link>
      </div>
      <div className="navs">
        <Link to="/">Home</Link>
        <Link to="/addnew">Addnote</Link>
      
      </div>
    </div>
  );
};

export default Header;
