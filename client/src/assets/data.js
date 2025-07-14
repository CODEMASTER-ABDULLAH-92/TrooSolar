import insta from "../assets/insta.png";
import loginImage from "../assets/loginImage.jpg";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import whatsApp from "../assets/whatsApp.png";
import store from "../assets/store.png";
import loans from "../assets/loan.png";
import userGear from "../assets/userGear.png";
import window from "../assets/window.png";
import shopping from "../assets/shopping.png";
import GearSix from "../assets/GearSix.png";
import LoanBox from "../assets/LoanBox.svg";
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
import usermgt from "../assets/usermgt.svg";
import creditMgt from "../assets/credit.svg";
import Loanmgt from "../assets/LoanBank.svg";
import loansDisbursement from "../assets/Loan.svg";
import Transactions from "../assets/transaction.svg";
import balance from "../assets/balance.svg";
import ShopMgt from "../assets/ShopMgt.svg";
import referral from "../assets/referral.svg";
import analytics from "../assets/analytics.svg";
import settings from "../assets/setting.svg";
import UserGear from "../assets/UserGear.svg";
import cart from "../assets/cart.svg";

import battery from "../assets/battery.svg";
import solar from "../assets/solar.svg";
import bulb from "../assets/bulb.svg";
import inverter from "../assets/inverter.svg";
import mttp from "../assets/mttp.svg";
import solarfan from "../assets/solarfan.svg";
import surge from "../assets/surge.svg";
import connector from "../assets/connector.svg";

import product from "../assets/product.png";


export const assets = {product,star1,star2, LoanBox,
  battery,solar,bulb,inverter,mttp,solarfan,surge,connector,light,
    insta, smLogo, sale, vec1, vec2, vec3, vec4, greenTick, b1, b2,line,stars,
    loginImage, logout, logo, store, loans, userGear, window,
    shopping, GearSix, sidebar, twitter, whatsApp, yt, loginImageForSm,
    dashboard, usermgt, creditMgt, Loanmgt, loansDisbursement, Transactions,
    balance, ShopMgt, referral, analytics, settings, UserGear,cart
};



export const Sidebar_links = [
  { name: "Home", link: "/homePage", icon: assets.dashboard, sublinks: [] },
  { name: "Store", link: "/shop-mgt", icon: assets.ShopMgt, sublinks: [] },
  { name: "Loan", link: "/loan", icon: assets.Loanmgt, sublinks: [] },
  { name: "Tools", link: "/settings", icon: assets.settings, sublinks: [] },
  { name: "Cart", link: "/cart", icon: assets.cart, sublinks: [] },
  { name: "More", link: "/credit-score", icon: assets.userGear, sublinks: [] },
];

export const solarBundleData = [
  {
    id: "abdcdfwgw",
    image: assets.b1,
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N2,500,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  },
  {
    id: "hshjwuw",
    image: assets.b2,
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N2,500,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#ff0000",
  },
  {
    id: "sjwkwwowo",
    image: assets.b2,
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N2,500,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#ff0000",
  },
  {
    id: "jsjsjsjjs",
    image: assets.b1,
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N2,500,000",
    oldPrice: "N5,000,000",
    discount: "-50%",
    soldText: "12/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  }
]
export const products = [
  {
    id: "abdcdfw",
    image: assets.product,
    brandName: "Newman",
    category: "Solar Panels",
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N2,500,000",
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
    brandName: "Luminous",
    category: "Batteries",
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N2,500,000",
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
    brandName: "Microtek",
    category: "Inverters",
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N2,500,000",
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
    brandName: "Su-Kam",
    category: "Solar Fans",
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N2,500,000",
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
    brandName: "Havells",
    category: "LED Bulbs",
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N1,800,000",
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
    brandName: "Anchor",
    category: "Extension Cords",
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N950,000",
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
    brandName: "Polycab",
    category: "Wire Cables",
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N1,200,000",
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
    brandName: "Phoenix",
    category: "Surge Arrestor",
    heading: "2 Newman Inverters + 1 Solar Panel + 4 LED Bulbs",
    price: "N750,000",
    oldPrice: "N1,500,000",
    discount: "-50%",
    soldText: "5/50",
    progressBar: assets.line,
    rating: assets.stars,
    borderColor: "#800080",
  }
];

export const categories = [
  "All",
  "Solar Panels",
  "Batteries",
  "Inverters",
  "LED Bulbs",
  "Solar Fans",
  "Surge Arrestor",
  "Connectors",
  "Wire Cables",
  "Extension Cords"
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