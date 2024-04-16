import React from 'react';
import { features, features_es } from "../constants/index";  // Asegúrate de tener ambas importaciones
import styles, { layout } from "../styles/styles";
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t, i18n } = useTranslation("global");

    // Decide qué conjunto de características mostrar en función del idioma actual
    const currentFeatures = i18n.language.startsWith('es') ? features_es : features;

    return (
        <section id="features" className={`${styles.paddingY}`}>
            <div className="block ss:hidden min-h-[100px]"></div>
            <h2 className={`text-center ${styles.heading2}`}>
                {t("features.title")}
            </h2>
            <p className={`${styles.paragraph} mt-5 text-center`}>
                {t("features.description")}
            </p>
            <div className={` ${styles.paddingY} flex items-center justify-between text-center flex-wrap`}>
                {
                    currentFeatures.map(feature => (
                        <div key={feature.id} className="rounded-[10px] mr-5 p-5 w-[100%] ss:w-[90%] sm:w-[46%] md:w-[30%] feature-card">
                            <div className="text-4xl p-4 my-5 text-center inline-block w-auto primary_gradient rounded-full">
                                {<feature.icon />}
                            </div>
                            <h1 className={`text-white text-xl font-medium`}>
                                {feature.title}
                            </h1>
                            <p className={`font-normal text-greyish text-[14px] leading-[30.8px] mt-5 text-center`}>
                                {feature.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Features;
