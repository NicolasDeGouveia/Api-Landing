import recognition from "../assets/icon-brand-recognition.svg";
import records from "../assets/icon-detailed-records.svg";
import custom from "../assets/icon-fully-customizable.svg";
const Main = () => {
  return (
    <section className="bg-[#f3f4f6] section-padding pb-40">
      <div className="section-container">
        <div className="flex flex-col items-center text-center pt-4 lg:pt-8 mb-24">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">
            Advanced Statistics
          </h2>
          <p className="text-[#bfbfbf] font-bold text-sm lg:w-[385px]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="relative grid lg:grid-cols-1 xl:grid-cols-3 gap-8 justify-items-center ">
          {/* First Card */}
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={recognition} alt="" />
            </div>
            <div className={styles.text}>
              <h3 className={styles.h3}>Brand Recognition</h3>
              <p className={styles.p}>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div
            className={`${styles.divbar} bottom-[28.3rem] md:bottom-[26.3rem] xl:bottom-24 lg:left-[392px]`}
          />
          {/* Second Card */}
          <div className={`${styles.card} top-12  `}>
            <div className={styles.img}>
              <img src={records} alt="" />
            </div>
            <div className={styles.text}>
              <h3 className={styles.h3}>Detailled Records</h3>
              <p className={styles.p}>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div
            className={`${styles.divbar}  bottom-[9.8rem] md:bottom-[9.8rem] lg:bottom-24 lg:right-[392px]`}
          />
          {/* Third Card */}
          <div className={`${styles.card} top-24`}>
            <div className={styles.img}>
              <img src={custom} alt="" />
            </div>
            <div className={styles.text}>
              <h3 className={styles.h3}>Fully Customizable</h3>
              <p className={styles.p}>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  card: "relative flex lg:block justify-center text-center bg-white px-8 pt-12 rounded-lg z-10",
  img: "bg-[#232127] p-5 w-fit rounded-full absolute -top-12",
  text: "py-8",
  h3: "font-extrabold text-lg pb-4",
  p: "text-[#bfbfbf] text-lg font-medium",
  divbar: "absolute w-2 lg:w-8 h-60 lg:h-10 xl:h-2 bg-[#2acfcf]",
};

export default Main;
