import work from "../assets/illustration-working.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" section-padding relative lg:mb-8 xl:mx-32">
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between px-6 lg:px-0 ">
        <div className={styles.content}>
          <h1 className="text-4xl lg:text-7xl font-extrabold">
            More than just shorter links
          </h1>
          <p className=" text-lg lg:text-3xl text-[#bfbfbf] text-medium py-4">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button content={"Get Started"} bg={true} style={styles.buttonHero} />
        </div>
        <img src={work} alt="" />
      </div>
    </section>
  );
};

const styles = {
  buttonHero: "py-4 px-12",
  content:
    "flex flex-col items-center xl:items-start lg:text-center xl:text-start py-4 lg:py-0 lg:w-[45rem]",
};

export default Hero;
