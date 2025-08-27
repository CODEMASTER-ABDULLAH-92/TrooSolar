import insta from "../assets/insta.png";
import userImage from "../assets/userImage.png";
import telegram from "../assets/telegram.svg";
import solarInverted from "../assets/solarInverted.svg";
import solar1 from "../assets/solar1.svg";
import solarProject from "../assets/solarProject.svg";
import solar from "../assets/solar.svg";
import support from "../assets/support.svg";
import kwc from "../assets/kwc.svg";
import rePayIcon from "../assets/rePayIcon.svg";
import house1 from "../assets/house1.svg";
import house2 from "../assets/house2.svg";
import house3 from "../assets/house3.svg";
import uploadArea from "../assets/uploadArea.svg";
import house4 from "../assets/house4.svg";
import loginImage from "../assets/loginImage.jpg";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import whatsApp from "../assets/whatsApp.png";
import store from "../assets/store.png";
import creditNeedle from "../assets/creditNeedle.png";
import loans from "../assets/loan.png";
import userGear from "../assets/UserGear.png";
import window from "../assets/window.png";
import shopping from "../assets/shopping.png";
import GearSix from "../assets/GearSix.png";
import LoanBox from "../assets/loanBox.svg";
import smLogo from "../assets/smLogo.png";
import sidebar from "../assets/sidebar.png";
import yt from "../assets/yt.png";
import greenTick from "../assets/greenTick.png";
import vec1 from "../assets/1Vec.png";
import vec2 from "../assets/2Vec.png";
import vec3 from "../assets/3Vec.png";
import vec4 from "../assets/4Vec.png";
import sale from "../assets/sale.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import line from "../assets/line.svg";
import stars from "../assets/stars.svg";
import star1 from "../assets/Star1.svg";
import star2 from "../assets/Star5.svg";
import light from "../assets/light.svg";
import logout from "../assets/logout.png";
import loginImageForSm from "../assets/loginImageForSm.jpg";
import dashboard from "../assets/dashboard.svg";
import usermgt from "../assets/userMgt.svg";
import creditMgt from "../assets/credit.svg";
import Loanmgt from "../assets/loanBank.svg";
import loansDisbursement from "../assets/loan.svg";
import Transactions from "../assets/transaction.svg";
import balance from "../assets/balance.svg";
import ShopMgt from "../assets/shopMgt.svg";
import referral from "../assets/referral.svg";
import analytics from "../assets/Analytics.svg";
import settings from "../assets/setting.svg";
import UserGear1 from "../assets/UserGear.svg";
import cart from "../assets/cart.svg";

import battery from "../assets/battery.svg";
import bulb from "../assets/bulb.svg";
import inverter from "../assets/inverter.svg";
import mttp from "../assets/mttp.svg";
import solarfan from "../assets/solarfan.svg";
import surge from "../assets/surge.svg";
import connector from "../assets/connector.svg";

import product from "../assets/product.png";


export const assets = {product,star1,star2,uploadArea, LoanBox,creditNeedle,house1,house2,house3,house4,
  battery,solar,bulb,inverter,mttp,solarfan,surge,connector,light,kwc,support,
    insta, smLogo, sale, vec1, vec2, vec3, vec4, greenTick, b1, b2,line,stars,solarProject,
    loginImage, logout, logo, store, loans, userGear, window,userImage,
    shopping, GearSix, sidebar, twitter, whatsApp, yt, loginImageForSm,telegram,
    dashboard, usermgt, creditMgt, Loanmgt, loansDisbursement, Transactions,
    balance, ShopMgt, referral, analytics, settings, UserGear1,cart,rePayIcon,solarInverted,solar1
};



export const Sidebar_links = [
  { name: "Home", link: "/", icon: assets.dashboard, sublinks: [] },
  { name: "Store", link: "/homePage", icon: assets.ShopMgt, sublinks: [] },
  { name: "Loan", link: "/loan", icon: assets.Loanmgt, sublinks: [] },
  { name: "Tools", link: "/tools", icon: assets.settings, sublinks: [] },
  { name: "Cart", link: "/cart", icon: assets.cart, sublinks: [] },
  { name: "More", link: "/more", icon: assets.userGear, sublinks: [] },
];

export const solarBundleData = [
  {
    id: "abdcdfwgw",
    image: assets.b1,
    price: "N2,500,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#FF0000",
    heading:"2 Newman Inverters + 1 Solar panel + 4 LED bulbs",
    
    bundleTitle: "Troosolar Mini bundle",
    backupInfo: "Provides backup for 10 hours",
    discountedPrice: 2450000, // optional field
    label: "Mini Bundle",
    totalLoad:"2500",
    inverterRating: "1200",
    totalOutput:"2500",
    itemsIncluded: [
        {
          title: "Newman inverter - 4kva",
          price: 1000000,
          icon: inverter // replace with actual path/icon component
        },
        {
          title: "Newman Battery - 2kva",
          price: 1000000,
          icon: inverter,
        },
        {
          title: "4 led bulbs",
          price: 100000,
          icon: ""
        }
      ]
  },
  {
    id: "abdcdfwgw",
    image: assets.b2,
    price: "N2,500,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
    heading:"2 Newman Inverters + 1 Solar panel + 4 LED bulbs",
    

    bundleTitle: "Troosolar Mini bundle",
    backupInfo: "Provides backup for 10 hours",
    discountedPrice: 2450000, // optional field
    label: "Mini Bundle",
    totalLoad:"2500",
    inverterRating: "1200",
    totalOutput:"2500",
    itemsIncluded: [

        {
          title: "Newman inverter - 4kva",
          price: 1000000,
          icon: "inverter-icon.png" // replace with actual path/icon component
        },
        {
          title: "Newman Battery - 2kva",
          price: 1000000,
          icon: inverter,
        },
        {
          title: "4 led bulbs",
          price: 100000,
          icon: ""
        }
      ]

  },
  {
    id: "abdcdfwgw",
    image: assets.b2,
    price: "N2,500,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
    

    heading:"2 Newman Inverters + 1 Solar panel + 4 LED bulbs",
    bundleTitle: "Troosolar Mini bundle",
    backupInfo: "Provides backup for 10 hours",
    discountedPrice: 2450000, // optional field
    label: "Mini Bundle",
    totalLoad:"2500",
    inverterRating: "1200",
    totalOutput:"2500",
    itemsIncluded: [
        {
          title: "Newman inverter - 4kva",
          price: 1000000,
          icon: "inverter-icon.png" // replace with actual path/icon component
        },
        {
          title: "Newman Battery - 2kva",
          price: 1000000,
          icon: inverter,
        },
        {
          title: "4 led bulbs",
          price: 100000,
          icon: ""
        }

    ],
  },
  {
    id: "abdcdfwgw",
    image: assets.b1,
    price: "N2,500,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#FF0000",
    

    heading:"2 Newman Inverters + 1 Solar panel + 4 LED bulbs",
    bundleTitle: "Troosolar Mini bundle",
    backupInfo: "Provides backup for 10 hours",
    discountedPrice: 2450000, // optional field
    label: "Mini Bundle",
    totalLoad:"2500",
    inverterRating: "1200",
    totalOutput:"2500",
    itemsIncluded: [

        {
          title: "Newman inverter - 4kva",
          price: 1000000,
          icon: "inverter-icon.png" // replace with actual path/icon component
        },
        {
          title: "Newman Battery - 2kva",
          price: 1000000,
          icon: inverter,
        },
        {
          title: "4 led bulbs",
          price: 100000,
          icon: ""
        }
      ]

  },

]

export const products = [
  {
    id: "abdcdfw",
    image: assets.product,
    brandName: "SafeSurge",
    category: "SolarPanels",
    heading: "Premium 450W Solar Panel Kit with Mounting",
    price: "N850,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  },
  {
    id: "hshjw",
    image: assets.product,
    brandName: "SafeSurge",
    category: "Batteries",
    heading: "12V Deep Cycle Battery Pack - 200Ah",
    price: "N620,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#ff0000",
  },
  {
    id: "skwwowo",
    image: assets.product,
    brandName: "WireX",
    category: "Inverters",
    heading: "3kVA Smart Hybrid Inverter System",
    price: "N1,300,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#ff0000",
  },
  {
    id: "jsjsjjs",
    image: assets.product,
    brandName: "WireX",
    category: "SolarFans",
    heading: "Solar-Powered Ceiling Fan with LED",
    price: "N230,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  },
  {
    id: "abc123",
    image: assets.product,
    brandName: "ChargeMate",
    category: "LEDBulbs",
    heading: "8-Pack LED Bulbs 9W - Energy Efficient",
    price: "N18,000",
    oldPrice: "N3,600,000",
    discount: "-50%",
    soldText: "25/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#0000ff",
  },
  {
    id: "def456",
    image: assets.product,
    brandName: "ChargeMate",
    category: "mttp",
    heading: "MTTP Solar Charge Controller 60A",
    price: "N145,000",
    oldPrice: "N1,900,000",
    discount: "-50%",
    soldText: "8/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#008000",
  },
  {
    id: "ghi789",
    image: assets.product,
    brandName: "BrightLite",
    category: "Connectors",
    heading: "Solar Cable Connectors (MC4 Compatible) - 10 Pack",
    price: "N35,000",
    oldPrice: "N2,400,000",
    discount: "-50%",
    soldText: "18/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#ffa500",
  },
  {
    id: "jkl012",
    image: assets.product,
    brandName: "BrightLite",
    category: "SurgeArrestor",
    heading: "Surge Protection Device – 3 Phase, 40kA",
    price: "N98,000",
    oldPrice: "N1,500,000",
    discount: "-50%",
    soldText: "5/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  },
  {
    id: "abdudcdfw",
    image: assets.product,
    brandName: "CoolBreeze",
    category: "SolarPanels",
    heading: "Premium 450W Solar Panel Kit with Mounting",
    price: "N850,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  },
  {
    id: "hshkdkjw",
    image: assets.product,
    brandName: "CoolBreeze",
    category: "Batteries",
    heading: "12V Deep Cycle Battery Pack - 200Ah",
    price: "N620,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#ff0000",
  },
  {
    id: "skwdkkdwowo",
    image: assets.product,
    brandName: "Voltas",
    category: "Inverters",
    heading: "3kVA Smart Hybrid Inverter System",
    price: "N1,300,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#ff0000",
  },
  {
    id: "jsjskkowjjs",
    image: assets.product,
    brandName: "PowerCell",
    category: "SolarFans",
    heading: "Solar-Powered Ceiling Fan with LED",
    price: "N230,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  },
  {
    id: "abc92nd123",
    image: assets.product,
    brandName: "PowerCell",
    category: "LEDBulbs",
    heading: "8-Pack LED Bulbs 9W - Energy Efficient",
    price: "N18,000",
    oldPrice: "N3,600,000",
    discount: "-50%",
    soldText: "25/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#0000ff",
  },
  {
    id: "def4djjd56",
    image: assets.product,
    brandName: "SunTech",
    category: "mttp",
    heading: "MTTP Solar Charge Controller 60A",
    price: "N145,000",
    oldPrice: "N1,900,000",
    discount: "-50%",
    soldText: "8/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#008000",
  },
  {
    id: "ghi78ooo9",
    image: assets.product,
    brandName: "SunTech",
    category: "Connectors",
    heading: "Solar Cable Connectors (MC4 Compatible) - 10 Pack",
    price: "N35,000",
    oldPrice: "N2,400,000",
    discount: "-50%",
    soldText: "18/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#ffa500",
  },
  {
    id: "jkljdj012",
    image: assets.product,
    brandName: "SunTech",
    category: "SurgeArrestor",
    heading: "Surge Protection Device – 3 Phase, 40kA",
    price: "N98,000",
    oldPrice: "N1,500,000",
    discount: "-50%",
    soldText: "5/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  }
];
export const bankOptions = [
  "Habib Bank Limited (HBL)",
  "Meezan Bank",
  "United Bank Limited (UBL)",
  "MCB Bank",
  "Allied Bank",
  "Bank Alfalah",
  "Faysal Bank",
];

export const starsArr = [
  star1,star1,star1,star1,star2
]