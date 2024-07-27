import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover the Perfect Card Deal <br className="sm:block hidden" /> in Just a Few Simple Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Explore a variety of card offers tailored to your needs. Compare options and find the best deal with ease. Our intuitive process ensures you get the most out of your financial choices.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card offers" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

