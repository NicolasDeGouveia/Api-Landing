import logo from "../assets/logo-black.svg";
import Button from "./Button";
import menu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { useState, useEffect } from "react";
import MenuMobile from "./MenuMobile";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [bg, setbg] = useState("bg-transparent");
  const [shadow, setShadow] = useState("shadow-none");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1) {
        setbg("bg-white");
        setShadow("shadow-xl");
      } else {
        setbg("bg-transparent");
        setShadow("shadow-none");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed py-8 z-20 ${bg} ${shadow}`}>
      <div className="section-container flex items-center justify-between">
        <img src={logo} alt="" />
        <div className="w-full hidden lg:flex justify-between items-center">
          <ul className="flex ml-8">
            <li className={styles.li}>Features</li>
            <li className={styles.li}>Pricing</li>
            <li className={styles.li}>Resources</li>
          </ul>
          <div>
            <Button content={"Login"} bg={false} />
            <Button content={"Sign Up"} bg={true} />
          </div>
        </div>
        <div className="lg:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu && <img src={close} alt="" />}
          {!toggleMenu && <img src={menu} alt="" />}
        </div>
      </div>
      <AnimatePresence>{toggleMenu && <MenuMobile />}</AnimatePresence>
    </nav>
  );
};

const styles = {
  li: "mr-4 text-[#bfbfbf] font-semibold text-sm cursor-pointer hover:text-black",
};

export default Navbar;
