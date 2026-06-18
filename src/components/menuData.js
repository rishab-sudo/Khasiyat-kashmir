export const foodImages = {
  Breakfast: [
    require("../assets/menu/brk-alu-paratha.png"),
  
    require("../assets/menu/brkfst-per3.png"),
  ],

      "South Indian Special": [
    require("../assets/menu/menu-south.png"),
require("../assets/menu/menu-south2.png"),
require("../assets/menu/south-prsn.png"),
  ],
  Soups: [
    require("../assets/menu/soups combo.png"),
    require("../assets/menu/Soup-prsn.png"),
require("../assets/menu/tamato soup.png"),
  ],
  Beverages: [
    require("../assets/menu/drinks combo.png"),
    require("../assets/menu/drinks-cheers.png"),
    require("../assets/menu/drink-prsn.png"),

  ],
    Starters: [
    require("../assets/menu/starter-veg-kebab.png"),
    require("../assets/menu/starters-prsn.png"),
require("../assets/menu/starter-dahi-kabab.jpeg"),
require("../assets/menu/malai panner tikka.png"),
  ],

        "Combo Meals": [
    require("../assets/menu/combo menu2.png"),
        require("../assets/menu/combo-prsn.png"),

  ],
          "Indian Main Course": [
    require("../assets/menu/north-menu.png"),
 
     require("../assets/menu/north-menu2.png"),

  ],
         Chinese: [
    require("../assets/menu/menu-chinese.png"),
    require("../assets/menu/chinese-prsn.jpeg"),


  ],
        "Jain Menu": [
    require("../assets/menu/jain-menu.png"),

  ],
        Desserts: [
    require("../assets/menu/dessert-menu.png"),
    require("../assets/menu/desrt-prsn.png"),

  ],
};

export const menuData = {
  Breakfast: {
    reverse: true,
    items: [
                  {
  heading: "subah ka nashta"
},

 {
  name: "POHA",
  price: "₹120",
  desc: "A light and flavorful breakfast made with flattened rice, fresh vegetables "
},
      // {
      //   name: "Masala Omelette",
      //   price: "₹90",
      //   desc: "Spicy omelette with onion & herbs",
      // },
      {
        name: "UPMA",
        price: "₹160",
    desc: "Classic South Indian upma with fresh herbs and spices"
      },
      
      {
        name: "Poori Bhaji (4 pcs poori)",
        price: "₹220",
        desc: "Crispy pooris served with spicy potato bhaji",
      },
      {
        name: "Chole BhaturA",
        price: "₹240",
        desc: "Punjabi-style chole served with fluffy bhature",
      },
      {
        name: "Porridge (Dalia) with Milk",
        price: "₹260",
        desc: "Healthy dalia cooked with fresh milk",
      },
      {
        name: "Masala Maggi",
        price: "₹120",
        desc: "Classic Maggi tossed with Indian spices",
      },
      {
        name: "Vegetable Maggi",
        price: "₹140",
        desc: "Maggi loaded with fresh vegetables",
      },
      {
        name: "Butter Vegetable Maggi",
        price: "₹160",
        desc: "Buttery Maggi with mixed vegetables",
      },
      {
        name: "Cheese Maggi",
        price: "₹180",
        desc: "Creamy cheesy Maggi with rich flavors",
      },
                        {
  heading: "Parathas  (2 pcs)"
},
      {
        name: "Onion Paratha with Dahi",
        price: "₹200",
        desc: "Stuffed onion paratha served with fresh curd",
      },
      {
        name: "Aloo Paratha with Dahi",
        price: "₹240",
        desc: "Classic potato stuffed paratha with fresh curd",
      },
      {
        name: "Mix Paratha with Dahi",
        price: "₹260",
        desc: "Mixed vegetable stuffed paratha with fresh curd",
      },
// Paneer Paratha
{
  name: "Paneer Paratha with Dahi",
  price: "₹280",
  desc: "Soft paneer stuffed paratha served with fresh curd"
},

// Cheese Paneer Paratha
{
  name: "Cheese Paneer Paratha with Dahi",
  price: "₹320",
  desc: "Cheesy paneer stuffed paratha served with fresh curd"
},
    ],
  },

  "South Indian Special": {
    reverse: false,
    items: [
                  {
  heading: "Dosa"
},

      {
        name: "Butter Sada Dosa",
        price: "₹180",
        desc: "Classic crispy dosa topped with butter",
      },
      
      {
        name: "Masala Dosa",
        price: "₹200",
        desc: "Golden dosa stuffed with flavorful potato masala",
      },
      {
        name: "Cheese Burst Masala Dosa",
        price: "₹240",
        desc: "Cheesy masala dosa with rich flavors",
      },
   {
  name: "Butter Mysore Sada Dosa",
  price: "₹220",
  desc: "Mysore style crispy dosa topped with butter"
},
    {
  name: "Mysore Masala Dosa",
  price: "₹240",
  desc: "Spicy Mysore dosa stuffed with flavorful potato masala"
},
      {
        name: "Butter Rava Sada Dosa",
        price: "₹280",
        desc: "Crispy rava dosa enriched with butter",
      },
      {
        name: "Rava Onion Masala Dosa",
        price: "₹280",
        desc: "Rava dosa topped with onion and masala filling",
      },
      {
        name: "Paneer Chilly Dosa",
        price: "₹360",
        desc: "Spicy paneer chilly filling inside crispy dosa",
      },
      {
        name: "Paneer Mysore Masala Dosa",
        price: "₹340",
        desc: "Mysore dosa stuffed with paneer and masala",
      },
  {
  name: "Peri Peri Paneer Dosa",
  price: "₹340",
  desc: "Paneer dosa tossed with spicy peri peri seasoning."
},
      {
        name: "Khaasiyat Spl Dosa Platter (6 varieties of dosa)",
        price: "₹450",
        desc: "Special platter featuring six delicious dosa varieties",
      },
                        {
  heading: "Uttapam"
},
      {
        name: "Butter Sada Uttapam",
        price: "₹200",
        desc: "Soft uttapam topped with butter",
      },
      {
        name: "Masala Uttapam",
        price: "₹220",
        desc: "Traditional uttapam with spicy masala flavors",
      },
      {
        name: "Cheese Masala Uttapam",
        price: "₹280",
        desc: "Cheesy uttapam loaded with masala toppings",
      },
      {
        name: "Onion Tomato Uttapam",
        price: "₹240",
        desc: "Soft uttapam topped with onion and tomato",
      },
      {
        name: "Khaasiyat Spl Uttapam Platter (6 varieties of uttapam)",
        price: "₹450",
        desc: "Special platter with six varieties of uttapam",
      },
                        {
  heading: "Idli Vada"
},
      {
        name: "Idli (2 pcs)",
        price: "₹120",
        desc: "Soft steamed idlis served with chutney and sambar",
      },
{
  name: "Idli Vada Mix",
  price: "₹130",
  desc: "A combination of soft idli and crispy medu vada served with chutney and sambar"
},

// Ghee Podi Idli
{ 
  name: "Ghee Podi Idli",
  price: "₹180",
  desc: "Soft idlis tossed in aromatic ghee and spicy podi masala"
},

// Vada
{
  name: "Vada (2 pcs)",
  price: "₹140",
  desc: "Crispy medu vada served with chutney and sambar"
},

// Masala Idli
{
  name: "Masala Idli",
  price: "₹180",
  desc: "Fried idli pieces tossed in flavorful South Indian masala spices"
},
    ],
  },

Soups: {
  reverse: true,
  items: [
    {
      name: "TOMATO SOUP",
      price: "₹225",
      desc: "Simple Tomato Soup with Fresh Mint, Coriander and Crunchy Croutons",
    },
    {
      name: "VEGETABLE SOUP",
      price: "₹225",
      desc: "Vegetable Soup For Weight Watchers",
    },
    {
      name: "LEMON CORIANDER SOUP",
      price: "₹225",
      desc: "Indian Style Soup with freshness of lemon and coriander",
    },
    {
      name: "VEG CLEAR SOUP",
      price: "₹225",
      desc: "Indian Style Soup with vegetable Broth to keep light on stomach",
    },
    {
      name: "SWEET CORN SOUP",
      price: "₹225",
      desc: " Chinese Style Creamy Soup with Corn and Vegetable",
    },
    {
      name: "HOT & SOUR SOUP",
      price: "₹225",
      desc: "Spicy Chinese Soup with Vegetable, Paneer and Mushroom",
    },
    {
      name: "MANCHOW SOUP",
      price: "₹225",
      desc: "Chinese Style Soup with Garlic & Crispy Noodles",
    },
    {
      name: "CREAM OF MUSHROOM",
      price: "₹290",
      desc: "Cream Of Mushroom Soup with Onion",
    },
    {
      name: "CREAM OF BROCCOLI",
      price: "₹280",
      desc: "Traditional Italian Broccoli Soup with Garlic",
    },
    {
      name: "VEG TALUMEIN SOUP",
      price: "₹280",
      desc: "Mixture of Greens and vegetables cooked in Vegetable Stock for heartful combination",
    },
    {
      name: "VEG TOMYUM SOUP",
      price: "₹280",
      desc: "Lower Calorie Soup with Vegetables and fragrant thai spices for tasty indulgence",
    },
  ],
},

 Starters: {
  reverse: false,
  items: [

    // ================= INDIAN STARTERS =================
                            {
  heading: "indian starters"
},
    {
      name: "CRISPY CORN",
      price: "₹300",
      desc: "Chakhna- Corn Kernnels made Crisp served with Fresh Onion Tomatoes & Corriander",
    },
    {
      name: "HARA BHARA KEBAB",
      price: "₹300",
      desc: "Indian Fav Snack – Mix Veg, Greens made into a patty served with Indian Dips",
    },
    {
      name: "MIX VEG BHAJIYA",
      price: "₹300",
      desc: "Crispy & Tasty, Mix Veg Fritters W/Sweet Chilli Sauce",
    },

    // ================= TANDOOR STARTERS =================
                                {
  heading: "tandoor starters"
},
    {
      name: "DAHI KE KEBAB",
      price: "₹360",
      desc: "Hung Curd, Paneer, Ginger And Green Chilli, Flour And Basic Spices Powder Served With Green Chutney",
    },
    {
      name: "STUFFED TANDOORI MUSHROOM Z",
      price: "₹360",
      desc: "Marinated Mushroom Stuffed With Cottage Cheese & Potato Cooked In Tandoor Served Salad & Chutney",
    },
    {
      name: "MALAI BROCCOLI",
      price: "₹430",
      desc: "White Sauce marinated Broccoli grilled in clay pot to perfection",
    },
    {
      name: "PANEER TIKKA TRIO",
      price: "₹400",
      desc: "3 varieties  of Marinated Paneer, Cooked In Tandoor Served with Salad & Chutney",
    },
    {
      name: "ALOO NAZAKAT",
      price: "₹360",
desc: "An Indian vegetarian starter consisting of deep-fried potato cylinders stuffed with a rich blend of paneer, dry fruits, raisins, and aromatic spices"
    },
   {
  name: "RED PANEER TIKKA",
  price: "₹380",
  desc: "Smoky paneer cubes with bold tandoori flavors",
},
{
  name: "WHITE PANEER TIKKA",
  price: "₹380",
  desc: "Creamy paneer tikka with a rich, mild taste",
},
{
  name: "GREEN PANEER TIKKA",
  price: "₹380",
  desc: "Fresh herb-marinated paneer grilled to perfection",
},
{
  name: "AFGANI SOYA CHAAP",
  price: "₹360",
  desc: "Rich and creamy Afghani-style soya chaap",
},
{
  name: "HARIYALI SOYA CHAAP",
  price: "₹340",
  desc: "Green herb-marinated soya chaap"
},
{
  name: "KASHMIRI SOYA CHAAP",
  price: "₹340",
  desc: "Flavorful soya chaap with aromatic Kashmiri spices",
},
    // ================= CHINESE STARTERS =================
                                {
  heading: "Chinese starters"
},
    {
  name: "CHINESE BHEL",
  price: "₹260",
  desc: "rispy noodles with fresh vegetables & Chinese sauce"
    },
{
  name: "VEG CRISPY",
  price: "₹300",
  desc: "Crispy vegetables tossed in Chinese sauces",
},
{
  name: "HONEY CHILLI POTATO",
  price: "₹260",
  desc: "Crispy French fries tossed in honey & chilli sauce",
},
{
  name: "VEG SPRING ROLL",
  price: "₹300",
  desc: "Vegetables rolled in a thin rice paper sheet, fried and served with dips",
},
{
  name: "CHEESE CIGAR ROLL (6 PCS)",
  price: "₹380",
  desc: "Crunchy rolls stuffed with melted cheese and sweet chilli sauce",
},
{
  name: "VEG MANCHURIAN (DRY)",
  price: "₹320",
  desc: "Veg balls tossed in classic Indo-Chinese sauces",
},
{
  name: "VEG PANEER CHILLY (DRY)",
  price: "₹380",
  desc: "Paneer, onions, and peppers tossed in spicy Chinese sauces",
},
{
  name: "MUSHROOM CHILLI",
  price: "₹380",
  desc: "Mushrooms stir-fried with chilli, ginger, and garlic",
},

  ],
},

Chinese: {
  reverse: true,
  items: [

    // ================= CHINESE MAIN COURSE =================
    {
      name: "VEGETABLE MANCHURIAN GRAVY",
      price: "₹300",
      desc: "Vegetable Balls In Manchurian Sauce",
    },
    {
      name: "CHILLI PANEER - GRAVY",
      price: "₹280",
      desc: "Cottage cheese, bell peppers & onions cooked in chilli garlic sauce",
    },
    {
      name: "VEGETABLES WITH HOT GARLIC SAUCE / BLACKBEAN SAUCE",
      price: "₹280",
      desc: "Vegetables Tossed In Hot Garlic Sauce Or Black Bean Sauce As Liking",
    },

    // ================= CHINESE RICE =================
                                    {
  heading: "Chinese Rice"
},
    {
      name: "VEGETABLE FRIED RICE",
      price: "₹280",
      desc: "Stir Fried Vegetables with Rice in Chinese Sauce",
    },
    {
      name: "SCHEZWAN FRIED RICE",
      price: "₹320",
      desc: "Stir Fried Vegetables with Rice in Schezwan Sauce And Chinese Sauce",
    },
    {
      name: "MUSHROOM FRIED RICE",
      price: "₹380",
      desc: "Stir fried mushroom with rice and Chinese sauce",
    },

    // ================= NOODLES & CHOPSUEY =================
                                    {
  heading: "Noodles & Chopsuey "
},
    {
      name: "HAKKA NOODLE",
      price: "₹280",
      desc: "Noodles Stir Fried with Shredded Vegetables",
    },
    {
      name: "CHILLY GARLIC NOODLES",
      price: "₹280",
      desc: "Spicy garlic-flavoured noodles with shredded vegetables",
    },
    {
      name: "SCHEZWAN GARLIC NOODLE",
      price: "₹320",
      desc: "Garlic-flavoured spicy noodles tossed in Schezwan sauce",
    },
    {
      name: "VEGETABLE CHOPSUEY",
      price: "₹360",
      desc: "Crispy Noodles Served Sweet Indo-chinese Sauce and Vegetables",
    },

    // ================= SIZZLING EXPRESS =================
                                   {
  heading: "Sizzling Express"
},
    {
      name: "SIZZED IN CHINA",
      price: "₹530",
      desc: "Chinese Style Sizzler Fried Rice, Veg Manchurian, Chilli Paneer Cooked In Chilli Garlic Sauce",
    },
    {
      name: "GOD FATHER DELIGHT",
      price: "₹530",
      desc: "Tandoori Platter with Paneer Tikka, Hara Bhara Kabab, Malai Broccoli, Soya Chap, Tandoori Aloo",
    },
    {
      name: "CHEF'S SPECIAL SIZZLER",
      price: "₹580",
      desc: "Paneer tikka (3 types), veg biryani, hakka noodles & manchurian dry",
    },

  ],
},
"Indian Main Course": {
  reverse: false,
  items: [
    {
      name: "Paneer Lababdar",
      price: "₹380",
      desc: "Paneer in mild red & white gravy",
    },
    {
      name: "Paneer Mirch Masala",
      price: "₹380",
      desc: "Mumbai-style paneer in spicy gravy",
    },
    {
      name: "Paneer Tikka Masala",
      price: "₹380",
      desc: "Marinated paneer cubes in onion-tomato gravy",
    },
    {
      name: "Paneer Butter Masala",
      price: "₹380",
      desc: "Classic paneer butter masala",
    },
    {
      name: "Palak Paneer",
      price: "₹380",
      desc: "Paneer cooked in creamy spinach gravy",
    },
    {
      name: "Kadai Paneer",
      price: "₹380",
      desc: "Paneer with onion & bell pepper in rich gravy",
    },
    {
      name: "Paneer Bhurji",
      price: "₹400",
      desc: "Minced cottage cheese in tomato-onion gravy",
    },
    {
      name: "Navratan Korma",
      price: "₹380",
      desc: "Combination of fruits, vegetables & dry fruits in mild gravy",
    },
    {
      name: "Kaju Butter Masala",
      price: "₹400",
      desc: "Rich cashew-based curry",
    },
    {
      name: "Corn Palak",
      price: "₹400",
      desc: "Punjabi-style corn & spinach cooked with herbs",
    },
    {
      name: "Mix Vegetable",
      price: "₹360",
      desc: "Combination of fresh vegetables in mild gravy",
    },
    {
      name: "Paneer Hyderabadi",
      price: "₹360",
      desc: "Cottage cheese in Hyderabadi-style gravy",
    },
    {
      name: "Dum Aloo",
      price: "₹360",
      desc: "Baby potatoes cooked in tangy & spicy gravy",
    },
    {
      name: "Aloo Pyaz Jaipuri",
      price: "₹360",
      desc: "Potatoes & onions in Rajasthani-style spicy gravy",
    },
    {
      name: "Baby Corn Lalfrezi",
      price: "₹400",
      desc: "Baby corn cooked in spicy gravy",
    },
    {
      name: "Methi Malai Matar",
      price: "₹400",
      desc: "Green peas & fenugreek in rich white gravy",
    },
    {
      name: "Jeera Aloo",
      price: "₹300",
      desc: "Cumin-flavoured potatoes",
    },
    {
      name: "Chana Masala",
      price: "₹320",
      desc: "Chickpeas cooked in Punjabi masala",
    },
    {
      name: "Baby Corn Mushroom Masala",
      price: "₹440",
      desc: "Baby corn & mushroom curry",
    },
    {
      name: "Soya Chaap Masala",
      price: "₹380",
      desc: "Soya chaap chunks cooked in masala gravy",
    },
    {
      name: "Malai Kofta",
      price: "₹400",
      desc: "Dry fruit-stuffed dumplings in rich yellow gravy",
    },
    {
      name: "Dal Tadka",
      price: "₹310",
      desc: "Yellow lentils tempered with spices",
    },
    {
      name: "Dal Makhani",
      price: "₹340",
      desc: "Slow-cooked black lentils with selected spices",
    },
    {
      name: "Dal Dhaba",
      price: "₹310",
      desc: "Lentils cooked in traditional dhaba style",
    },

    {
      name: "Roasted Papad (2 pcs)",
      price: "₹90",
      desc: "Crispy roasted papad served fresh",
    },
    {
      name: "Roasted Masala Papad (2 pcs)",
      price: "₹150",
      desc: "Roasted papad topped with masala and veggies",
    },
    {
      name: "Fried Papad (2 pcs)",
      price: "₹100",
      desc: "Crunchy fried papad served hot",
    },
    {
      name: "Fried Masala Papad (2 pcs)",
      price: "₹160",
      desc: "Fried papad topped with spicy masala mix",
    },

    {
      name: "------From Tandoor------",
      price: "",
      desc: "",
    },

    {
      name: "Tandoori Roti",
      price: "₹50",
      desc: "Freshly baked tandoori roti",
    },
    {
      name: "Butter Tandoori Roti",
      price: "₹65",
      desc: "Soft tandoori roti topped with butter",
    },
    {
      name: "Naan",
      price: "₹90",
      desc: "Classic soft naan baked in tandoor",
    },
    {
      name: "Butter Naan",
      price: "₹100",
      desc: "Buttery naan served hot from tandoor",
    },
    {
      name: "Garlic Butter Naan",
      price: "₹120",
      desc: "Naan flavored with garlic and butter",
    },
    {
      name: "Chilli Garlic Butter Naan",
      price: "₹140",
      desc: "Spicy garlic naan topped with butter",
    },
    {
      name: "Cheese Naan",
      price: "₹180",
      desc: "Soft naan stuffed with melted cheese",
    },
    {
      name: "Stuffed Naan",
      price: "₹140",
      desc: "Stuffed naan with flavorful filling",
    },
    {
      name: "Lachha Paratha",
      price: "₹80",
      desc: "Layered crispy lachha paratha",
    },
    {
      name: "Pudina Mirchi Lachha Paratha",
      price: "₹100",
      desc: "Mint and chilli flavored lachha paratha",
    },
    {
      name: "Stuffed Paratha Mix Veg",
      price: "₹120",
      desc: "Mixed vegetable stuffed paratha",
    },
    {
      name: "Missi Roti",
      price: "₹100",
      desc: "Traditional gram flour Indian bread",
    },
    {
      name: "Onion Chilli Kulcha",
      price: "₹120",
      desc: "Kulcha stuffed with onion and chilli",
    },
    {
      name: "Roti Basket",
      price: "₹320",
      desc: "Assorted basket of Indian breads",
    },
  ],
},
"Jain Menu": {
  reverse: true,
  items: [
    {
      name: "Palak Paneer",
      price: "₹380",
      desc: "Fresh paneer cubes cooked in creamy spinach gravy",
    },
    {
      name: "Paneer Makhni",
      price: "₹380",
      desc: "Rich buttery paneer curry with mild Jain spices",
    },
    {
      name: "Palak Corn",
      price: "₹320",
      desc: "Sweet corn cooked in flavorful spinach gravy",
    },
    {
      name: "Paneer Pasanda",
      price: "₹380",
      desc: "Stuffed paneer cooked in rich creamy gravy",
    },
    {
      name: "Tomato Corn Bharta",
      price: "₹350",
      desc: "Tangy tomato and corn curry with Indian flavors",
    },
    {
      name: "Dal Tadka",
      price: "₹310",
      desc: "Yellow lentils tempered with Jain style spices",
    },
  ],
},

Beverages: {
  reverse: false,
  items: [
    {
      heading: "Mocktails",
    },
    {
      name: "Lemon Ice Tea",
      price: "₹180",
      desc: "Refreshing lemon flavored iced tea",
    },
    {
      name: "Blue Breeze",
      price: "₹180",
      desc: "Cool blue mocktail served chilled",
    },
    {
      name: "Fresh Lime Soda",
      price: "₹180",
      desc: "Fresh lime soda with fizz",
    },
    {
      name: "Nimbu Paani",
      price: "₹120",
      desc: "Traditional fresh Indian lemonade",
    },
    {
      name: "Blue Lagoon",
      price: "₹180",
      desc: "Refreshing blue citrus mocktail",
    },

    {
      heading: "Mojito (350 ml)",
    },
    {
      name: "Green Apple Mojito",
      price: "₹240",
      desc: "Minty green apple mojito",
    },
    {
      name: "Strawberry Mojito",
      price: "₹240",
      desc: "Fresh strawberry mint mojito",
    },
    {
      name: "Virgin Mojito",
      price: "₹240",
      desc: "Classic mint lime mojito",
    },
    {
      name: "Watermelon Mojito",
      price: "₹240",
      desc: "Refreshing watermelon mojito",
    },

    {
      heading: "Milkshakes (300 ml)",
    },
    {
      name: "Brownie Milk Shake",
      price: "₹320",
      desc: "Creamy brownie blended milkshake",
    },
    {
      name: "Oreo Milkshake",
      price: "₹320",
      desc: "Creamy Oreo cookie milkshake",
    },
    {
      name: "Kit Kat Milkshake",
      price: "₹320",
      desc: "Chocolate Kit Kat milkshake",
    },
    {
      name: "Strawberry Milkshake",
      price: "₹300",
      desc: "Fresh strawberry creamy milkshake",
    },
    {
      name: "Khaasiyat Chocolate Spl Milkshake",
      price: "₹440",
      desc: "Signature rich chocolate milkshake",
    },

    {
      heading: "Cold Coffee (300 ml)",
    },
    {
      name: "Classic Cold Coffee",
      price: "₹240",
      desc: "Smooth chilled cold coffee",
    },
    {
      name: "Tall N Dark",
      price: "₹320",
      desc: "Strong dark cold coffee",
    },
    {
      name: "Iced Mocha",
      price: "₹240",
      desc: "Chocolate flavored iced coffee",
    },

    {
      heading: "Hot Coffee",
    },
    {
      name: "Espresso Single",
      price: "₹80",
      desc: "Single shot espresso coffee",
    },
    {
      name: "Espresso Double",
      price: "₹120",
      desc: "Double shot espresso coffee",
    },
    {
      name: "Cappuccino",
      price: "₹160",
      desc: "Classic frothy cappuccino",
    },
    {
      name: "Cafe Latte",
      price: "₹160",
      desc: "Smooth creamy cafe latte",
    },
    {
      name: "Café Mocha",
      price: "₹200",
      desc: "Coffee blended with chocolate",
    },
    {
      name: "Hazelnut Coffee",
      price: "₹180",
      desc: "Hazelnut flavored hot coffee",
    },
    {
      name: "Caramel Coffee",
      price: "₹180",
      desc: "Rich caramel hot coffee",
    },
    {
      name: "Hot Chocolate",
      price: "₹220",
      desc: "Rich creamy hot chocolate",
    },

    {
      heading: "Hot Beverages",
    },
    {
      name: "Saffron Khawa",
      price: "₹160",
      desc: "Traditional saffron herbal drink",
    },
    {
      name: "Black Tea",
      price: "₹80",
      desc: "Classic black tea",
    },
    {
      name: "Hot Lemon Tea",
      price: "₹80",
      desc: "Warm lemon infused tea",
    },
    {
      name: "Masala Tea",
      price: "₹90",
      desc: "Traditional Indian masala tea",
    },
    {
      name: "Green Tea",
      price: "₹80",
      desc: "Refreshing green tea",
    },
    {
      name: "Americano",
      price: "₹150",
      desc: "Freshly brewed black coffee",
    },

    {
      heading: "Miscellaneous",
    },
    {
      name: "Red Bull",
      price: "₹180",
      desc: "Chilled energy drink",
    },
    {
      name: "Soft Drink",
      price: "₹100",
      desc: "Refreshing soft drink",
    },
    {
      name: "Bottled Water",
      price: "MRP",
      desc: "Packaged drinking water",
    },
    {
      name: "Butter Milk",
      price: "₹120",
      desc: "Chilled traditional buttermilk",
    },
    {
      name: "Lassi (Sweet)",
      price: "₹180",
      desc: "Sweet Punjabi style lassi",
    },
  ],
},

"Combo Meals": {
  reverse: false,
  items: [
    {
      heading: "Mini Meal Combo",
    },
    {
      name: "Paratha Platter",
      price: "₹360",
      desc: "Choose any 2 parathas with raita, pickle, onion salad & shahi kheer",
    },
    {
      name: "Dal Makhani Mini Meal",
      price: "₹380",
      desc: "Served with 2 lachha parathas, veg raita, onion salad & pickle",
    },
    {
      name: "Dal Makhani with Jeera Rice",
      price: "₹360",
      desc: "Served with onion salad, pickle, raita & papad",
    },
    {
      name: "Bhuna Paneer with Baby Naan",
      price: "₹400",
      desc: "Served with onion salad, pickle, raita & papad",
    },
    {
      name: "Chole with Chawal",
      price: "₹360",
      desc: "Served with onion salad, pickle, raita & papad",
    },

    {
      heading: "Thalis",
    },
    {
      name: "Khaasiyat Executive Thali",
      price: "₹440",
      desc: "(Serves 1) Paneer of the day, dal tadka, rice, butter rotis, salad, pickle & sweet",
    },
    {
      name: "Khaasiyat Maharaja Thali Spl",
      price: "₹640",
      desc: "(Serves 2) Paneer, mix veg, dal makhani, bread, rice, salad, pickle & dessert",
    },

    {
      heading: "Add Starter (Only with Maharaja Thali)",
    },
    {
      name: "Hara Bhara Kebab (2 Pcs)",
      price: "₹100",
      desc: "Add-on starter with Maharaja Thali",
    },
    {
      name: "Paneer Tikka (2 Pcs)",
      price: "₹100",
      desc: "Add-on paneer starter with Maharaja Thali",
    },

    {
      heading: "Add Drink (Only with Maharaja Thali)",
    },
    {
      name: "Masala Chaas",
      price: "₹69",
      desc: "Refreshing spiced buttermilk",
    },
    {
      name: "Lassi",
      price: "₹99",
      desc: "Traditional sweet creamy lassi",
    },
  ],
},

Desserts: {
  reverse: true,
  items: [
    {
      name: "Shahi Kheer",
      price: "₹200",
      desc: "Traditional rich and creamy royal rice pudding",
    },
    {
      name: "Walnut Brownie with Ice Cream",
      price: "₹250",
      desc: "Warm walnut brownie served with ice cream",
    },
    {
      name: "Single Scoop Ice Cream (Vanilla/Chocolate)",
      price: "₹120",
      desc: "Creamy ice cream scoop in vanilla or chocolate flavor",
    },
  ],
},

};