import React from 'react'; // Make sure to import React
import styles from "../styles/styles";
import { FaRocket } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const GetStarted = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full primary_gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="primary_text_shade">{t("home.button_plane")} </span>
          <FaRocket className="ml-2 primary_text_shade text-lg animate-pulse text-blue-200" />
          
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
