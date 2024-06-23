import NavBar from "../UI/Navigation/NavBar";
import MobileNav from "../UI/Navigation/MobileNav";

export default function Header() {

  return (
    <div>
      <NavBar />
      <div className="md:hidden">
        <input type="checkbox" id="nav-toggle" className="hidden peer/nav-toggle" />
        <MobileNav />
      </div>
    </div>
  );
}