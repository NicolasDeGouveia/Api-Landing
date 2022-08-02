const Button = ({ content, bg, style }) => {
  return (
    <button
      style={{ style }}
      className={
        bg
          ? `${styles.button} ${style} text-white border-none bg-[#2acfcf] py-2 px-5 rounded-full`
          : `${styles.button} text-[#bfbfbf] mr-4`
      }
    >
      {content}
    </button>
  );
};

const styles = {
  button: "font-semibold text-sm cursor-pointer",
};
export default Button;
