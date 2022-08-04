import { createContext, useState } from "react";
import axios from "axios";

const LinksContext = createContext();

export function LinksProvider({ children }) {
  // ShortLink + Input Form Management
  const [isEmpty, setIsEmpty] = useState(false);
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState([]);

  // Copy Button Management
  const [toggleCopy, setToggleCopy] = useState(false);

  const handleInput = (event) => {
    setInput(event.target.value);
    if (input.length >= 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  // Submit form + API call on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    shortenLink({ setInput, setResult, setSubmit, input, result });
  };

  function handleClick() {
    navigator.clipboard.writeText(`${result.shortLink}`);
    setToggleCopy(true);
  }

  // call API
  async function shortenLink({
    setResult,
    setInput,
    setSubmit,
    input,
    result,
  }) {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      setResult([
        ...result,
        {
          OriginalLink: response.data.result.original_link,
          shortLink: response.data.result.short_link,
        },
      ]);
      setSubmit(true);
      setInput("");
    } catch (error) {
      console.error(error);
      setSubmit(false);
    }
  }

  return (
    <LinksContext.Provider
      value={{
        isEmpty,
        setIsEmpty,
        input,
        setInput,
        submit,
        setSubmit,
        result,
        setResult,
        toggleCopy,
        setToggleCopy,
        handleInput,
        handleSubmit,
        handleClick,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
}

export default LinksContext;
