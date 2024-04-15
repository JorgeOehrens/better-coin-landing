import { useState , useEffect} from "react";
import styles, { layout } from "../styles/styles";
import { community_stats } from '../constants';
import WorldMap from 'react-world-map';
import getTokenBalance  from '../Server/Etherscan/balance'; 
import getEthPrice  from '../Server/Etherscan/EthUsd'; 

const Community = () => {
  const [selected, onSelect] = useState(null);
  const [balance, setBalance] = useState('Loading...'); // Estado inicial como 'Loading...'
  const [ethPrice, setEthPrice] = useState(null);
  const [balanceInUsd, setBalanceInUsd] = useState('Loading...');
  useEffect(() => {
    const contractAddress = "0x4c1109e95b479A9E4bACB948635aDB74a01691c1";
    const address = "0x4c1109e95b479a9e4bacb948635adb74a01691c1";

    // Obtener el balance del token
    getTokenBalance(contractAddress, address)
      .then(data => {
        if (data) {
          setBalance(data);
          // Cuando tengamos el balance, obtener el precio del ETH
          getEthPrice().then(price => {
            setEthPrice(price);
            setBalanceInUsd((data * price).toFixed(2));  // Calcular el balance en USD
          });
        } else {
          setBalance('Error fetching balance');
        }
      });
  }, []);
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

              <div key={1} className="my-5 w-[40%] lg:w-[33%]">
                <h1 className="text-3xl sm:text-5xl font-medium font-poppins mb-3">{balance} ETH</h1>
                <p className={`md:w-[95%] font-poppins font-normal text-greyish leading-[30.8px] text-[18px]`}>ETH Price</p>
              </div>
              <div key={2} className="my-5 w-[40%] lg:w-[33%]">
                <h1 className="text-3xl sm:text-5xl font-medium font-poppins mb-3">$ {balanceInUsd} USD</h1>
                <p className={`md:w-[95%] font-poppins font-normal text-greyish leading-[30.8px] text-[18px]`}>USD Price</p>
              </div>
             
        </div>
        
      </div>

      <div className="flex items-center justify-center">
        <WorldMap multiple={true} selected={selected} onSelect={onSelect} />
      </div>
    </section>
  )
};

export default Community;