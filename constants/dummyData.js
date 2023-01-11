import icons from "./icons";
import images from "./images";

const myProfile = {
  name: "Krystian",
  profile_image: images.profile,
  address: "No. 88, Jln Padungan, Kuching",
};

const categories = [
  {
    id: 1,
    name: "Fast Food",
    icon: icons.burger,
  },
  {
    id: 2,
    name: "Fruit Item",
    icon: icons.cherry,
  },
  {
    id: 3,
    name: "Rice Item",
    icon: icons.rice,
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/hot_tacos.png"),
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description:
    "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/veg_biryani.png"),
};

const wrapSandwich = {
  id: 4,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/wrap_sandwich.png"),
};

const menu = [
  {
    id: 1,
    name: "Featured",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: "Nearby you",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: "Popular",
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: "Newest",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: "Trending",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: "Recommended",
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

const sizes = [
  {
    id: 1,
    label: '12"',
  },
  {
    id: 2,
    label: '14"',
  },
  {
    id: 3,
    label: '16"',
  },
  {
    id: 4,
    label: '18"',
  },
];

const myCart = [
  {
    ...hamburger,
    qty: 1,
  },
  {
    ...hotTacos,
    qty: 1,
  },
  {
    ...vegBiryani,
    qty: 1,
  },
];

const myCards = [
  {
    id: 1,
    name: "Master Card",
    icon: require("../assets/icons/mastercard.png"),
    card_no: "1234",
  },
  {
    id: 2,
    name: "Google Pay",
    icon: require("../assets/icons/google.png"),
    card_no: "1234",
  },
];

const allCards = [
  {
    id: 1,
    name: "Apple Pay",
    icon: require("../assets/icons/apple.png"),
  },
  {
    id: 2,
    name: "Visa",
    icon: require("../assets/icons/visa.png"),
  },
  {
    id: 3,
    name: "PayPal",
    icon: require("../assets/icons/paypal.png"),
  },
  {
    id: 4,
    name: "Google Pay",
    icon: require("../assets/icons/google.png"),
  },
  {
    id: 5,
    name: "Master Card",
    icon: require("../assets/icons/mastercard.png"),
  },
];

const fromLocs = [
  {
    latitude: 51.892162735486785,
    longitude: 18.950916322932308,
  },
  {
    latitude: 51.89109371096511,
    longitude: 18.95300036789608,
  },
  {
    latitude: 51.891143822057174,
    longitude: 18.95574300715161,
  },
  {
    latitude: 51.885708760387,
    longitude: 18.955235315535027,
  },
  {
    latitude: 51.87476516878254,
    longitude: 18.957436981074153,
  },
  {
    latitude: 51.89368927797026,
    longitude: 18.95970840060383,
  },
];

const coupons = [
  {
    id: 1,
    image: images.burger_king,
    name: "Burger King",
    discount: 20,
    valid_date: "01 Jan 2022",
  },
  {
    id: 2,
    image: images.kfc,
    name: "KFC",
    discount: 10,
    valid_date: "01 Feb 2022",
  },
  {
    id: 3,
    image: images.mcdonald,
    name: "McDonald",
    discount: 30,
    valid_date: "01 Jan 2022",
  },
  {
    id: 4,
    image: images.pizza_hut,
    name: "Pizza hut",
    discount: 50,
    valid_date: "01 May 2022",
  },
  {
    id: 5,
    image: images.starbucks,
    name: "Starbucks",
    discount: 15,
    valid_date: "01 Dec 2023",
  },
];

export default {
  myProfile,
  categories,
  menu,
  sizes,
  myCart,
  myCards,
  allCards,
  fromLocs,
  coupons,
};
