import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";
import logo from "../assets/logo-white.svg";

const Footer = () => {
  return (
    <div className="py-24 bg-[#232127] text-white">
      <div className="section-container flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:flex-row">
          <ul className={styles.ul}>
            <h4 className={styles.h4}>Features</h4>
            <li className={styles.li}>Link Shortening</li>
            <li className={styles.li}>Branded Links</li>
            <li className={styles.li}>Analytics</li>
          </ul>
          <ul className={styles.ul}>
            <h4 className={styles.h4}>Resources</h4>
            <li className={styles.li}>Blog</li>
            <li className={styles.li}>Developers</li>
            <li className={styles.li}>Support</li>
          </ul>
          <ul className={styles.ul}>
            <h4 className={styles.h4}>Company</h4>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Our Team</li>
            <li className={styles.li}>Careers</li>
            <li className={styles.li}>Contact</li>
          </ul>
        </div>
        <div className="flex items-center lg:items-start justify-center">
          <div className={styles.icon}>
            <img src={facebook} alt="" />
          </div>
          <div className={styles.icon}>
            <img src={twitter} alt="" />
          </div>
          <div className={styles.icon}>
            <img src={pinterest} alt="" />
          </div>
          <div className={styles.icon}>
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  ul: "lg:mr-16 text-center lg:text-start my-4 lg:my-0",
  h4: "font-bold mb-4",
  li: "text-xs text-[#bfbfbf] leading-7 ",
  icon: "mr-4",
};
export default Footer;
