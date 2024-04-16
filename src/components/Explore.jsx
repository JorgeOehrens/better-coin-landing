import { useState } from 'react';

import styles, { layout } from "../styles/styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from '../components';
import {app} from '../assets/index';
import {ContactModal} from '../components';
import { useTranslation } from 'react-i18next';

const Explore = () => {
  const [t, i18n] = useTranslation("global");

  const [showModal, setShowModal] = useState(false);

  const openContactModal = () => {
    setShowModal(true);
  }

  const closeContactModal = () => {
    setShowModal(false);
  }
  return (
    <section id="explore" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        {t("explore.tittle.1")} <br className="hidden md:block" />{t("explore.tittle.2")}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t("explore.description")} 
        </p>
        
        <div className={`md:${styles.flexCenter} inline-block w-full sm:w-auto sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button onclick={openContactModal} title="Let's Get Started" icon={<AiOutlineArrowRight></AiOutlineArrowRight>} />
        </div>

        {
          showModal &&
          <ContactModal close={closeContactModal} />
        }

      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={app} alt="App" />
      </div>
    </section>
  )
}

export default Explore;