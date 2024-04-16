import styles, { layout } from "../styles/styles";
import { markets } from '../constants/index';
import { useTranslation } from 'react-i18next';

const Market = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="market" className={`${styles.paddingY}`}>
      <div className="block ss:hidden min-h-[100px]"></div>

      <div className={`flex justify-around flex-col md:flex-row items-center`}>
        <h2 className={styles.heading2}>
        {t("market.tittle.1")}<br className="hidden md:block" /> {t("market.tittle.2")}
        </h2>
        <p className={`${styles.paragraph} w-[100%]`}>
        {t("market.description")}
        </p>
      </div>

      {/* <div className="container mx-auto rounded-3xl sm:py-8 sm:selection:px-4 shadow sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3">
          {
            markets.map(market => (
              <div className="sm:px-6" key={market.id}>
                <div className="my-10 text-2xl font-bold">
                  {market.title}
                </div>
                {
                  market.data.map((item, index) => (
                    <div className="grid grid-cols-3 my-3" key={index}>
                      <p className={`w-[95%] font-poppins font-normal text-greyish leading-[30.8px] text-[17px]`}>{item.name}</p>
                      <p className={`${!item.isNegative ? 'text-green-400' : 'text-red-400' } font-poppins text-right font-normal leading-[30.8px] text-[17px]`}> {item.rate}</p>
                      <p className={`${!item.isNegative ? 'text-green-400' : 'text-red-400' } text-right font-poppins font-normal leading-[30.8px] text-[17px]`}> {item.percent}</p>
                    </div>
                  ))
                }
              </div>
            )
            )
          }
        </div>
      </div> */}
    </section>
  )
}

export default Market