import Button from "./Button";
import { motion } from "framer-motion";

const MenuMobile = () => {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: 100 }}
      className="w-full lg:hidden flex flex-col justify-between items-center bg-black/70 py-4 rounded-t-3xl fixed bottom-0"
    >
      <ul className="flex ml-8">
        <li className={styles.li}>Features</li>
        <li className={styles.li}>Pricing</li>
        <li className={styles.li}>Resources</li>
      </ul>
      <div>
        <Button content={"Login"} bg={false} />
        <Button content={"Sign Up"} bg={true} />
      </div>
    </motion.nav>
  );
};

const styles = {
  li: "mr-4 p-2 text-[#bfbfbf] font-semibold text-sm cursor-pointer hover:text-black",
};

export default MenuMobile;
