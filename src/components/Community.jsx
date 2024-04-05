import { useState } from "react";
import styles, { layout } from "../styles/styles";
import { community_stats } from '../constants';
import WorldMap from 'react-world-map';

const Community = () => {
  const [selected, onSelect] = useState(null);

  return (
    <section id="community" className={`${layout.section} ${styles.boxWidth} ${styles.paddingY}`}>
      <div className="block ss:hidden min-h-[100px]">
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Become a Better Coin Delegate <br className="hidden md:flex" /> What a Delegetae Does? 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A delegate of Better Coin acts as an intermediary in the trading of BETTER, the cryptocurrency. Their role includes connecting sellers and buyers, facilitating transactions without affecting the market price. They earn a commission for this service.
        </p>
        <div className="my-5 flex sm:items-center justify-between w-[100%] flex-wrap">
          {
            community_stats.map((item) => (
              <div key={item.id} className="my-5 w-[40%] lg:w-[33%]">
                <h1 className="text-3xl sm:text-5xl font-medium font-poppins mb-3">{item.value}</h1>
                <p className={`md:w-[95%] font-poppins font-normal text-greyish leading-[30.8px] text-[16px]`}>{item.title}</p>
              </div>
            ))
          }
        </div>

      </div>

      <div className="flex items-center justify-center">
        <WorldMap multiple={true} selected={selected} onSelect={onSelect} />
      </div>
    </section>
  )
};

export default Community;