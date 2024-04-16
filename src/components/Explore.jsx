import { useState } from 'react';

import styles, { layout } from "../styles/styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from '../components';
import {app} from '../assets/index';
import {ContactModal} from '../components';
const Explore = () => {
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
          Move ahead with us to  <br className="hidden md:block" />explore the world
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit natus culpa error modi 
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