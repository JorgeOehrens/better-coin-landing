import { useState } from 'react';
import styles from "../styles/styles";
import Button from "./Button";
import { AiFillPhone } from "react-icons/ai";
import { ContactModal } from '../components';
import { useTranslation } from 'react-i18next';

const Connect = () => {
  const [showModal, setShowModal] = useState(false);
  const [t, i18n] = useTranslation("global");

  const openContactModal = () => {
    setShowModal(true);
  }

  const closeContactModal = () => {
    setShowModal(false);
  }

  return (
    <section id="contact">
      <div className="block ss:hidden min-h-[100px]">

      </div>
      <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] transparent_box_shadow`}>
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>{t("contact.tittle")} </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-5`}>
          {t("contact.description")}
          </p>
        </div>

        <div className={`md:${styles.flexCenter} inline-block w-full sm:w-auto sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button onclick={openContactModal} title={t("contact.button")} icon={<AiFillPhone></AiFillPhone>} />
        </div>

        {
          showModal &&
          <ContactModal close={closeContactModal} />
        }
      </div>
    </section>
  )
};

export default Connect;