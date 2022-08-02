import Button from "./Button";

const Started = () => {
  return (
    <div className="w-full py-12 bg-[url('/src/assets/bg-boost-desktop.svg')] bg-no-repeat bg-cover bg-black/80 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl lg:text-4xl font-extrabold text-white mb-4 text-center">
          Boost your links today
        </h2>
        <Button
          content={"Get Started"}
          bg={true}
          style={styles.buttonStarted}
        />
      </div>
    </div>
  );
};

const styles = {
  buttonStarted: "px-8",
};

export default Started;
