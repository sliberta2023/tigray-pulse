import logo from '../../assets/logo/TP-logos.jpeg';


function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <img
        src={logo}
        alt="the logo image"
        className="w-[70px] dark:filter dark:invert"
      />
    </nav>
  );
}

export default Navbar;
