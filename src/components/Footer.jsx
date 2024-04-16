import React from 'react';
import { logo } from '../assets';
import { footer_menu, footer_menu_es, socail_media_icons } from '../constants';
import styles from '../styles/styles';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation('global');

  const getYear = new Date().getFullYear();

  // Decidir qué menú de pie de página usar en función del idioma
  const currentFooterMenu = i18n.language.startsWith('es') ? footer_menu_es : footer_menu;

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start">
          <img
            src={logo}
            alt="biteezy"
            className="w-[150px] h-[72.14px] object-contain ml-[-12px]"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            {t('Footer.description')}
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {currentFooterMenu.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {t(footerlink.title)}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full text-center flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className={`${styles.paragraph}`}>
          Copyright Ⓒ {getYear} BetterCoin. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socail_media_icons.map((social, index) => (
            <div
              key={social.id}
              onClick={() => window.open(social.link)}
              className={`cursor-pointer ${index !== socail_media_icons.length - 1 ? 'mr-6' : 'mr-0'}`}
            >
              <social.icon className={`text-2xl`}></social.icon>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
