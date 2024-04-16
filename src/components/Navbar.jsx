import { useState } from 'react'
import { logo } from '../assets'
import { header_menu, header_menu_es } from "../constants";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from '../styles/styles';
import { useTranslation } from 'react-i18next';
import en from '../assets/flags/en.png';
import es from '../assets/flags/es.png';

const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const [language, setLanguage] = useState('en');
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang); 
    };
    const currentMenu = language === 'en' ? header_menu : header_menu_es;

    return (
        <nav className={`w-full ${styles.boxWidth} flex py-6 justify-between items-center navbar`}>
            <img src={logo} alt="Biteezy" className="logoStyle w-[30%] ss:w-[22%] sm:w-[15%] md:w-[22%]" />
     
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {
                    currentMenu.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${active === nav.title ? "text-white" : "text-dimWhite"
                                } ${index === currentMenu.length - 1 ? "mr-0" : "mr-10"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}> {t(nav.title)}</a>
                        </li>
                    ))
                }
               <button className={`language-button ${language === 'en' ? 'active' : ''}`} onClick={() => handleChangeLanguage("en")}>
                    <img src={en} alt="English" />
                </button>
                <button className={`language-button ${language === 'es' ? 'active' : ''}`} onClick={() => handleChangeLanguage("es")}>
                    <img src={es} alt="Español" />
                </button>
                
            </ul>

            {/* Navbar for small devices */}
            <div className="md:hidden flex flex-1 justify-end items-center">
                <div className="text-3xl" onClick={() => setToggle(!toggle)}>
                    {
                        toggle ? <AiOutlineClose /> : <BiMenuAltRight />
                    }
                </div>

                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {header_menu.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === header_menu.length - 1 ? "mb-0" : "mb-4"}`}
                                //onClick={() => setActive(nav.title)}
                                onClick={()=>{
                                    setActive(nav.title)
                                    setToggle(false);
                                }}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                                       <button className={`language-button ${language === 'en' ? 'active' : ''}`} onClick={() => handleChangeLanguage("en")}>
                    <img src={en} alt="English" />
                </button>
                <button className={`language-button ${language === 'es' ? 'active' : ''}`} onClick={() => handleChangeLanguage("es")}>
                    <img src={es} alt="Español" />
                </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;