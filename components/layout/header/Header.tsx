import Link from "next/link";
import TanwishLogo from "../../svg/TanwishLogo";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <header>
      <Link href="./" className="logo-container">
        <TanwishLogo className="logo" />
        <h2>TANWISH</h2>
      </Link>
      <div className="header-buttons">
        <ul>
          <HeaderLink className="" link="#courses" title="Courses" />
          <HeaderLink className="" link="#facilities" title="Facilities" />
          <HeaderLink className="" link="#contact" title="Contact" />
        </ul>

        <div className="account-button">
          <button>LogIn</button>
          <button>SignUp</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
