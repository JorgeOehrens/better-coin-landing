import { AiFillStar, AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillPlayCircle, AiFillApple } from "react-icons/ai";
import { SiFsecure } from "react-icons/si";
import { SiMastercomfig } from "react-icons/si";
import {c1, c2, c3  } from '../assets/index'; 

export const header_menu = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "community",
    title: "Community",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "market",
    title: "Market",
  },
  {
    id: "reviews",
    title: "Reviews",
  },
  {
    id: "convertor",
    title: "Convertor",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

export const features = [
  {
    id: "feature-1",
   icon: AiFillStar,
    title: "Smartcoin is a new cryptocurrency concept  with transactional intelligence abilities",
    content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. dignissimos tenetur sapiente. Corrupti, inventore?      ",
  },
  {
    id: "feature-2",
   icon: SiFsecure,
    title: "Bettercoin is a Web3 suite designed for swaps exclusively between user wallets. ",
    content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde dolorem dignissimos tenetur sapiente ipsa.",
  },
  {
    id: "feature-3",
   icon: SiMastercomfig,
    title: "Worldwide launch",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur sapiente ipsa. Corrupti, inventore? "
  },
  {
    id: "feature-4",
   icon: SiMastercomfig,
    title: "Underlying principles of Bettercoin design ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur sapiente ipsa. Corrupti, inventore? "
  },
  {
    id: "feature-5",
   icon: SiMastercomfig,
    title: "Tokens that need to be imported into the user's wallet ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur sapiente ipsa. Corrupti, inventore? "
  },
  {
    id: "feature-6",
   icon: SiMastercomfig,
    title: "Double transaction system explained in detail ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur sapiente ipsa. Corrupti, inventore? "
  },
  {
    id: "feature-7",
   icon: SiMastercomfig,
    title: "Delegated sale function explained in detail ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur sapiente ipsa. Corrupti, inventore? "
  },
];

export const testimonials = [
  {
    id: "1",
    content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores corporis provident dolore quisquam dolorem error blanditiis itaque iste totam tempore nesciunt hic, voluptatum ad at rem esse quaerat ullam voluptates. Nam neque aliquid corrupti blanditiis!",
    name: "John Doe",
    title: "Founder & Leader",
    img: c1
  },
  {
    id: "2",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptatem optio illo excepturi? Aut ducimus, dignissimos voluptatem amet temporLorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores corporis provident dolore quisquam dolorem error blanditiis ie aspernatur quo adipisci atque est asperiores.",
    name: "Henry Marck",
    title: "Founder & Leader",
    img: c2
  },
  {
    id: "3",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptatem optio illo excepturi? Aut ducimus, dignissimos voluptatem amet tempore aspernatur quo adipisci atque est asperiores.",
    name: "Antim Reck",
    title: "Founder & Leader",
    img: c3
  },
  {
    id: "4",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptatem optio illo excepturi? Aut ducimus, dignissimos voluptatem amet tempore aspernatur quo adipisci atque est asperiores.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: c3
  },
];

export const community_stats = [
  {
    id: "stats-1",
    title: "MARKETCAP",
    value: "USD 25.9M",
  },
  {
    id: "stats-2",
    title: "LAUNCH TO DATE",
    value: "882.67 %",
  },
  {
    id: "stats-3",
    title: "CURRENT PRICE",
    value: "USD 11.8",
  },
];

export const markets = [
  {
    id: 1,
    title: "BTC",
    data: [
      {
        name: 'BTC/USD',
        rate: '669,600,00',
        percent: '+4.59%',
      },
      {
        name: 'BTC/CLP',
        rate: '14,346',
        percent: '-0.11%',
        isNegative:true
      },
      {
        name: 'BTC/BETTER',
        rate: '15,600',
        percent: '0.00%'
      },
      {
        name: 'BTC/ETH',
        rate: '48,550,000',
        percent: '+5.80%'
      },
      {
        name: 'BTC/SOL',
        rate: '536,100',
        percent: '+4.87%'
      },
    ]
  },
  {
    id: 3,
    title: "ETH",
    data: [
      {
        name: 'ETH/USD',
        rate: '46,721.351',
        percent: '+3.66%',
      },
      {
        name: 'ETH/CLP',
        rate: '3,384,958',
        percent: '+3.16%',
      },
      {
        name: 'ETH/BETTER',
        rate: '1,079',
        percent: '+1.27%'
      },
      {
        name: 'ETH/BTC',
        rate: '12.700',
        percent: '-2.12%',
        isNegative:true

      },
      {
        name: 'ETH/SOL',
        rate: '271,790',
        percent: '+1.98%'
      },
    ]
  },

  {
    id: 2,
    title: "BETTER",
    data: [
      {
        name: 'BETTER/USD',
        rate: '0.000000635',
        percent: '-4.08%',
        isNegative:true
      },
      {
        name: 'BETTER/CLP',
        rate: '0.00029135',
        percent: '+2.18%',
      },
      {
        name: 'BETTER/BTC',
        rate: '0.00172174',
        percent: '-0.99%',
        isNegative:true
      },
      {
        name: 'BETTER/ETH',
        rate: '0.00004466',
        percent: '-6.31%',
        isNegative:true
      },
      {
        name: 'BETTER/SOL',
        rate: '0.00002148',
        percent: '-2.81%',
        isNegative:true
      },
    ]
  },
 
]

export const footer_menu = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Contact us",
        link: "#",
      },
      {
        name: "Carrers",
        link: "#",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Coin Base",
        link: "#",
      },
      {
        name: "Coin Desk",
        link: "#",
      },
      {
        name: "Binance",
        link: "#",
      },
    ],
  },
  {
    title: "Download",
    links: [
      {
        name: AiFillPlayCircle,
        link: "#",
        isImg:true,
        title:'Play store'
      },
      {
        name: AiFillApple,
        link: "#",
        isImg:true,
        title:'App store'
      }
    ],
  },
];

export const socail_media_icons = [
  {
    id: "social-media-1",
    icon: AiFillInstagram ,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
   icon: AiFillFacebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
   icon: AiOutlineTwitter ,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
   icon: AiFillLinkedin ,
    link: "https://www.linkedin.com/",
  },
];
export const convertor_dropdown_data1 = [
  {
    value: 'BETTER' ,
    title: 'BetterCoin'
  }
]
export const convertor_dropdown_data2 = [
  {
    value: 'USD' ,
    title: 'Us Dollar'
  },
  {
    value: 'EUR' ,
    title: 'Euro'
  },
  {
    value: 'JPY' ,
    title: 'Japanese Yen'
  },
  {
    value: 'GBP' ,
    title: 'Pound Sterling'
  },
  {
    value: 'LUNA' ,
    title: 'Terra'
  },
  {
    value: 'CHF' ,
    title: 'Swiss franc '
  },
  {
    value: 'HKD' ,
    title: 'Hong Kong dollar'
  },
  {
    value: 'NZD' ,
    title: 'New Zealand Dollar'
  },
  {
    value: 'LTC' ,
    title: 'Litecoin'
  },
  {
    value: 'CRO' ,
    title: 'Cronos'
  },
  {
    value: 'CAD' ,
    title: 'Canadian Dollar'
  },
  {
    value: 'AUD' ,
    title: 'Australian Dollar'
  },
  {
    value: 'BTC' ,
    title: 'Bitcoin'
  }
]