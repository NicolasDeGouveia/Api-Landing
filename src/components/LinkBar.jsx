import { useContext } from "react";
import LinksContext from "../utils/LinksContext";
import Button from "./Button";

const LinkBar = () => {
  const { handleSubmit, handleInput, input, isEmpty } =
    useContext(LinksContext);

  return (
    <div className="section-container relative flex justify-center">
      <div className="absolute -top-20 bg-[url('src/assets/bg-shorten-desktop.svg')] bg-no-repeat bg-cover bg-black/80 py-6 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col lg:flex-row items-center justify-center lg:my-6 px-4 lg:px-12"
        >
          <input
            value={input}
            onChange={handleInput}
            type="text"
            placeholder="Shorten a link here..."
            className="w-full md:w-[450px] lg:w-[950px] p-4 rounded-lg mb-4 lg:mb-0 lg:mr-6 text-lg outline-red-600"
          />
          <Button content={"Shorten It!"} bg={true} style={styles.buttonBar} />
        </form>
        {isEmpty && (
          <span className="pl-12 italic text-red-600">Please add a link</span>
        )}
      </div>
    </div>
  );
};

const styles = {
  buttonBar: "w-full lg:w-auto rounded-lg py-4 px-8",
};

export default LinkBar;
