import { useContext, useState } from "react";
import LinksContext from "../utils/LinksContext";
import Button from "./Button";

const Results = ({ inputResult }) => {
  const { handleClick, toggleCopy, setToggleCopy } = useContext(LinksContext);

  console.log(inputResult);

  return (
    <div className="flex flex-col my-4">
      {inputResult.map((result, index) => (
        <div
          key={index}
          className="w-full bg-white text-base lg:text-2xl p-4 rounded-xl my-4 lg:my-2"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-full flex flex-col lg:flex-row justify-between">
              <div>{result.OriginalLink}</div>
              <div className={toggleCopy ? "text-[#2acfcf]" : ""}>
                {result.shortLink}
              </div>
            </div>
            <div
              onClick={() => {
                navigator.clipboard.writeText(`${result.shortLink}`);
                setToggleCopy(!toggleCopy);
              }}
            >
              <Button
                key={index}
                content={toggleCopy ? "Copied" : "Copy"}
                bg={true}
                style={
                  toggleCopy ? styles.buttonLinksCopied : styles.buttonLinks
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  buttonLinks: "w-full lg:ml-4 rounded-lg px-8",
  buttonLinksCopied: "w-full lg:ml-4 rounded-lg px-8 bg-black/70",
};

export default Results;
