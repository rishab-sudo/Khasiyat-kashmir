export const foodImages = {
  Breakfast: [
    require("../assets/menu/brk-alu-paratha.png"),
  
    require("../assets/menu/brkfst-per3.png"),
  ],

      "South Indian Special": [
    require("../assets/menu/menu-south.png"),
require("../assets/menu/menu-south2.png"),
  ],
  Soups: [
    require("../assets/menu/soups combo.png"),
require("../assets/menu/tamato soup.png"),
  ],
  Beverages: [
    require("../assets/menu/drinks combo.png"),
require("../assets/menu/drinks-cheers.png"),
  ],
    Starters: [
    require("../assets/menu/starter-veg-kebab.png"),
require("../assets/menu/starter-dahi-kabab.jpeg"),
require("../assets/menu/malai panner tikka.png"),
  ],

        "Combo Meals": [
    require("../assets/menu/combo menu2.png"),

  ],
          "Indian Main Course": [
    require("../assets/menu/north-menu.png"),
     require("../assets/menu/north-menu2.png"),

  ],
         Chinese: [
    require("../assets/menu/menu-chinese.png"),


  ],
        "Jain Menu": [
    require("../assets/menu/jain-menu.png"),

  ],
        Desserts: [
    require("../assets/menu/dessert-menu.png"),

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
    desc: "Classic South Indian upma with fresh herbs and spices."
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
  heading: "Parathas"
},
      {
        name: "Onion Paratha with Dahi",
        price: "₹200",
        desc: "Stuffed onion paratha served with fresh curd",
      },
      {
        name: "Aloo Paratha with Dahi",
        price: "₹240",
        desc: "Classic potato stuffed paratha with curd",
      },
      {
        name: "Mix Paratha with Dahi",
        price: "₹260",
        desc: "Mixed vegetable stuffed paratha with curd",
      },
      {
        name: "Paneer Paratha with Dahi",
        price: "₹300",
        desc: "Soft paneer stuffed paratha served with curd",
      },
      {
        name: "Cheese Paneer Paratha with Dahi",
        price: "₹280",
        desc: "Cheesy paneer paratha served with fresh curd",
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
        price: "₹200",
        desc: "Mysore style dosa with buttery crisp texture",
      },
      {
        name: "Mysore Masala Dosa",
        price: "₹230",
        desc: "Spicy Mysore dosa filled with potato masala",
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
        price: "₹240",
        desc: "Paneer dosa flavored with peri peri spices",
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
        name: "Idli 2 pcs",
        price: "₹120",
        desc: "Soft steamed idlis served with chutney and sambar",
      },
      {
        name: "Idli Vada Mix",
        price: "₹120",
        desc: "Combination of idli and crispy medu vada",
      },
      {
        name: "Ghee Podi Idli",
        price: "₹220",
        desc: "Idlis tossed in ghee and spicy podi masala",
      },
      {
        name: "Vada 2 pcs",
        price: "₹120",
        desc: "Crispy medu vada served with chutney and sambar",
      },
      {
        name: "Masala Idli",
        price: "₹160",
        desc: "Fried idli tossed in flavorful masala spices",
      },
    ],
  },

Soups: {
  reverse: true,
  items: [
    {
      name: "TOMATO SOUP",
      price: "225",
      desc: "Simple Tomato Soup Fresh Mint, Coriander Served Crunchy Croutons",
    },
    {
      name: "VEGETABLE SOUP",
      price: "225",
      desc: "Vegetable Soup For Weight Watchers",
    },
    {
      name: "LEMON CORRIANDER SOUP",
      price: "225",
      desc: "Indian Style Soup freshness of lemon and coriander",
    },
    {
      name: "VEG CLEAR SOUP",
      price: "225",
      desc: "Indian Style Soup with vegetable Broth to keep light on stomach",
    },
    {
      name: "SWEET CORN SOUP",
      price: "225",
      desc: "A Chinese Style Creamy Soup Corn and Vegetable",
    },
    {
      name: "HOT & SOUR SOUP",
      price: "225",
      desc: "Spicy Chinese Soup Vegetable, Paneer and Mushroom",
    },
    {
      name: "MANCHOW SOUP",
      price: "225",
      desc: "Chinese Style Soup Garlic & Crispy Noodles",
    },
    {
      name: "CREAM OF MUSHROOM",
      price: "290",
      desc: "Cream Of Mushroom Soup Onion",
    },
    {
      name: "CREAM OF BROCCOLI",
      price: "280",
      desc: "Traditional Italian Broccoli Soup Garlic",
    },
    {
      name: "VEG TALUMEIN SOUP",
      price: "280",
      desc: "Mixture of Greens and vegetables cooked in Vegetable Stock for heartful combination.",
    },
    {
      name: "VEG TOMYUM SOUP",
      price: "280",
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
      price: "300",
      desc: "Chakhna- Corn Kernnels made Crisp served with Fresh Onion Tomatoes & Corriander",
    },
    {
      name: "HARA BHARA KEBAB",
      price: "300",
      desc: "Indian Fav Snack – Mix Veg, Greens made into a patty served with Indian Dips",
    },
    {
      name: "MIX VEG BHAJIYA",
      price: "300",
      desc: "Crispy & Tasty, Mix Veg Fritters W/Sweet Chilli Sauce",
    },

    // ================= TANDOOR STARTERS =================
                                {
  heading: "tandoor starters"
},
    {
      name: "DAHI KE KEBAB",
      price: "360",
      desc: "Hung Curd, Paneer, Ginger And Green Chilli, Flour And Basic Spices Powder Served With Green Chutney",
    },
    {
      name: "STUFFED TANDOORI MUSHROOM Z",
      price: "360",
      desc: "Marinated Mushroom Stuffed With Cottage Cheese & Potato Cooked In Tandoor Served Salad & Chutney",
    },
    {
      name: "MALAI BROCCOLI",
      price: "380",
      desc: "White Sauce marinated Broccoli grilled in clay pot to perfection",
    },
    {
      name: "PANEER TIKKA TRIO",
      price: "380",
      desc: "3 Types of Marinated Paneer, Cooked In Tandoor Served with Salad & Chutney",
    },
    {
      name: "ALOO NAZAKAT",
      price: "360",
desc: "An Indian vegetarian starter consisting of deep-fried potato cylinders stuffed with a rich blend of paneer, dry fruits, raisins, and aromatic spices."
    },
   {
  name: "RED PANEER TIKKA",
  price: "380",
  desc: "Smoky paneer cubes with bold tandoori flavors.",
},
{
  name: "WHITE PANEER TIKKA",
  price: "380",
  desc: "Creamy paneer tikka with a rich, mild taste.",
},
{
  name: "GREEN PANEER TIKKA",
  price: "380",
  desc: "Fresh herb-marinated paneer grilled to perfection.",
},
{
  name: "AFGANI SOYA CHAAP",
  price: "360",
  desc: "Tender soya chaap in a creamy, flavorful marinade.",
},
{
  name: "HARIYALI SOYA CHAAP",
  price: "340",
  desc: "Soya chaap coated with fresh mint and herbs.",
},
{
  name: "KASHMIRI SOYA CHAAP",
  price: "340",
  desc: "Flavorful soya chaap with aromatic Kashmiri spices.",
},
    // ================= CHINESE STARTERS =================
                                {
  heading: "Chinese starters"
},
    {
  name: "CHINESE BHEL",
  price: "260",
  desc: "Crispy noodles tossed with fresh veggies and Chinese sauces.",
},
{
  name: "VEG CRISPY",
  price: "300",
  desc: "Crunchy vegetables tossed in flavorful Chinese sauces.",
},
{
  name: "HONEY CHILLI POTATO",
  price: "260",
  desc: "Crispy potato fries coated in honey chilli sauce.",
},
{
  name: "VEG SPRING ROLL",
  price: "300",
  desc: "Crispy rolls filled with seasoned vegetables and served with dips.",
},
{
  name: "CHEESE CIGAR ROLL (6 PCS)",
  price: "380",
  desc: "Crunchy rolls stuffed with melted cheese and sweet chilli sauce.",
},
{
  name: "VEG MANCHURIAN (DRY)",
  price: "320",
  desc: "Veg balls tossed in classic Indo-Chinese sauces.",
},
{
  name: "VEG PANEER CHILLY (DRY)",
  price: "380",
  desc: "Paneer, onions, and peppers tossed in spicy Chinese sauces.",
},
{
  name: "MUSHROOM CHILLI",
  price: "380",
  desc: "Mushrooms stir-fried with chilli, ginger, and garlic.",
},

  ],
},

Chinese: {
  reverse: true,
  items: [

    // ================= CHINESE MAIN COURSE =================
    {
      name: "VEGETABLE MANCHURIAN GRAVY",
      price: "300",
      desc: "Vegetable Balls In Manchurian Sauce",
    },
    {
      name: "CHILLI PANEER - GRAVY",
      price: "280",
      desc: "Marinated Cottage Cheese Bell Peppers, Onions Cooked In Chilli Garlic Sauce",
    },
    {
      name: "VEGETABLES WITH HOT GARLIC SAUCE / BLACKBEAN SAUCE",
      price: "280",
      desc: "Vegetables Tossed In Hot Garlic Sauce Or Black Bean Sauce As Liking",
    },

    // ================= CHINESE RICE =================
                                    {
  heading: "Chinese Rice"
},
    {
      name: "VEGETABLE FRIED RICE",
      price: "280",
      desc: "Stir Fried Vegetables with Rice in Chinese Sauce",
    },
    {
      name: "SCHEZWAN FRIED RICE",
      price: "320",
      desc: "Stir Fried Vegetables with Rice in Schezwan Sauce And Chinese Sauce",
    },
    {
      name: "MUSHROOM FRIED RICE",
      price: "380",
      desc: "Stir fried mushroom with rice and Chinese sauce",
    },

    // ================= NOODLES & CHOPSUEY =================
                                    {
  heading: "Noodles & Chopsuey "
},
    {
      name: "HAKKA NOODLE",
      price: "280",
      desc: "Noodles Stir Fried with Shredded Vegetables",
    },
    {
      name: "CHILLY GARLIC NOODLES",
      price: "280",
      desc: "Garlic Flavoured Spicy Noodles Shredded Vegetables",
    },
    {
      name: "SCHEZWAN GARLIC NOODLE",
      price: "320",
      desc: "Garlic Flavoured Spicy Noodles Shredded Vegetables tossed in schezwan sauce",
    },
    {
      name: "VEGETABLE CHOPSUEY",
      price: "360",
      desc: "Crispy Noodles Served Sweet Indo-chinese Sauce and Vegetables",
    },

    // ================= SIZZLING EXPRESS =================
                                   {
  heading: "Sizzling Express"
},
    {
      name: "SIZZED IN CHINA",
      price: "480",
      desc: "Chinese Style Sizzler Fried Rice, Veg Manchurian, Chilli Paneer Cooked In Chilli Garlic Sauce",
    },
    {
      name: "GOD FATHER DELIGHT",
      price: "480",
      desc: "Tandoori Platter with Paneer Tikka, Hara Bhara Kabab, Malai Broccoli, Soya Chap, Tandoori Aloo",
    },
    {
      name: "CHEF'S SPECIAL SIZZLER",
      price: "480",
      desc: "Sizzler Paneer Tikka 3 Types, Veg Biryani with small portion of Hakka Noodles and Manchurian Dry",
    },

  ],
},
"Indian Main Course": {
  reverse: false,
  items: [
    {
      name: "Paneer Lababdar",
      price: "₹380",
      desc: "Rich creamy paneer curry cooked in flavorful gravy",
    },
    {
      name: "Paneer Mirch Masala",
      price: "₹380",
      desc: "Paneer cooked with capsicum and spicy masala",
    },
    {
      name: "Paneer Tikka Masala",
      price: "₹380",
      desc: "Tandoori paneer tikka served in spicy gravy",
    },
    {
      name: "Paneer Butter Masala",
      price: "₹380",
      desc: "Creamy buttery paneer curry with rich flavors",
    },
    {
      name: "Palak Paneer",
      price: "₹380",
      desc: "Fresh paneer cubes cooked in spinach gravy",
    },
    {
      name: "Kadai Paneer",
      price: "₹380",
      desc: "Paneer tossed with capsicum in kadai masala",
    },
    {
      name: "Paneer Bhurji",
      price: "₹400",
      desc: "Spiced scrambled paneer cooked with herbs",
    },
    {
      name: "Navratan Korma",
      price: "₹380",
      desc: "Mixed vegetables and dry fruits in creamy gravy",
    },
    {
      name: "Kaju Butter Masala",
      price: "₹400",
      desc: "Cashew based rich buttery curry",
    },
    {
      name: "Corn Palak",
      price: "₹400",
      desc: "Sweet corn cooked in creamy spinach gravy",
    },
    {
      name: "Mix Vegetable",
      price: "₹360",
      desc: "Fresh mixed vegetables cooked in Indian spices",
    },
    {
      name: "Paneer Hyderabadi",
      price: "₹360",
      desc: "Hyderabadi style paneer curry with rich flavors",
    },
    {
      name: "Dum Aloo",
      price: "₹360",
      desc: "Baby potatoes cooked in aromatic gravy",
    },
    {
      name: "Aloo Pyaz Laziz",
      price: "₹360",
      desc: "Potato and onion curry with flavorful spices",
    },
    {
      name: "Baby Corn Lazeez",
      price: "₹400",
      desc: "Baby corn cooked in creamy Indian gravy",
    },
    {
      name: "Methi Malai Matar",
      price: "₹400",
      desc: "Creamy fenugreek and green peas curry",
    },
    {
      name: "Jeera Aloo",
      price: "₹300",
      desc: "Potatoes tossed with cumin and Indian spices",
    },
    {
      name: "Chana Masala",
      price: "₹320",
      desc: "Punjabi style chickpea curry",
    },
    {
      name: "Baby Corn Mushroom Masala",
      price: "₹440",
      desc: "Baby corn and mushroom cooked in rich gravy",
    },
    {
      name: "Soya Chaap Masala",
      price: "₹380",
      desc: "Soya chaap cooked in spicy masala gravy",
    },
    {
      name: "Dal Makhni",
      price: "₹340",
      desc: "Creamy black lentils slow cooked with butter",
    },
    {
      name: "Dal Tadka",
      price: "₹310",
      desc: "Yellow dal tempered with Indian spices",
    },
    {
      name: "Dal Dhaba",
      price: "₹310",
      desc: "Dhaba style dal with smoky flavors",
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
  heading: "Mocktails"
},
    {
      name: "Lemon Ice Tea",
      price: "₹180",
      desc: "Refreshing chilled lemon flavored iced tea",
    },
    {
      name: "Blue Breeze",
      price: "₹180",
      desc: "Cool blue mocktail with refreshing flavors",
    },
    {
      name: "Fresh Lime Soda",
      price: "₹180",
      desc: "Refreshing lime soda served chilled",
    },
    {
      name: "Nimbu Pani",
      price: "₹120",
      desc: "Traditional Indian lemonade with fresh lime",
    },
                                           {
  heading: "Mojito 350 ml"
},
    {
      name: "Green Apple Mojito",
      price: "₹240",
      desc: "Minty mojito infused with green apple flavor",
    },
    {
      name: "Strawberry Mojito",
      price: "₹240",
      desc: "Refreshing strawberry mojito with mint",
    },
    {
      name: "Virgin Mojito",
      price: "₹240",
      desc: "Classic mojito with mint and lime",
    },
    {
      name: "Watermelon Mojito",
      price: "₹280",
      desc: "Refreshing watermelon mojito served chilled",
    },

                                              {
  heading: "Milkshakes 300ml"
},

    {
      name: "Brownie Milk Shake",
      price: "₹320",
      desc: "Rich brownie blended creamy milkshake",
    },
    {
      name: "Oreo Milkshake",
      price: "₹320",
      desc: "Creamy Oreo cookies blended milkshake",
    },
    {
      name: "Kit Kat Milkshake",
      price: "₹320",
      desc: "Chocolatey Kit Kat flavored milkshake",
    },
    {
      name: "Strawberry Milkshake",
      price: "₹300",
      desc: "Fresh strawberry flavored creamy milkshake",
    },
    {
      name: "Khaasiyat Chocolate Spl Milkshake",
      price: "₹440",
      desc: "Signature rich chocolate special milkshake",
    },

                                             {
  heading: "Cold Coffee 300 ml"
},

    {
      name: "Classic Cold Coffee",
      price: "₹240",
      desc: "Smooth and refreshing cold coffee",
    },
    {
      name: "Hazelnut Frappe",
      price: "₹240",
      desc: "Creamy hazelnut flavored frappe",
    },
    {
      name: "Nutella Frappe",
      price: "₹280",
      desc: "Nutella blended chilled coffee frappe",
    },
    {
      name: "Tall N Dark",
      price: "₹320",
      desc: "Strong dark cold coffee delight",
    },

                                            {
  heading: "Miscellaneous"
},

    {
      name: "Red Bull",
      price: "₹180",
      desc: "Energy drink served chilled",
    },
    {
      name: "Soft Drink",
      price: "₹100",
      desc: "Refreshing soft drink options available",
    },
    {
      name: "Bottled Water",
      price: "MRP",
      desc: "Packaged drinking water bottle",
    },
    {
      name: "Butter Milk",
      price: "₹120",
      desc: "Refreshing chilled traditional buttermilk",
    },
    {
      name: "Lassi (Sweet)",
      price: "₹180",
      desc: "Sweet creamy Punjabi style lassi",
    },

                                            {
  heading: "Hot Items"
},

    {
      name: "Saffron Kahwa",
      price: "₹160",
      desc: "Traditional Kashmiri saffron kahwa tea",
    },
    {
      name: "Black Tea",
      price: "₹80",
      desc: "Classic strong black tea",
    },
    {
      name: "Hot Lemon Tea",
      price: "₹80",
      desc: "Warm lemon infused tea",
    },
    {
      name: "Masala Tea",
      price: "₹90",
      desc: "Indian spiced masala chai",
    },
    {
      name: "Green Tea",
      price: "₹80",
      desc: "Healthy refreshing green tea",
    },
                                           {
  heading: "Hot Coffee"
},

    {
      name: "Espresso Single",
      price: "₹80",
      desc: "Strong single shot espresso coffee",
    },
    {
      name: "Espresso Double",
      price: "₹120",
      desc: "Double shot rich espresso coffee",
    },
    {
      name: "Cappuccino",
      price: "₹160",
      desc: "Classic cappuccino with frothy milk",
    },
    {
      name: "Cafe Latte",
      price: "₹160",
      desc: "Smooth latte with creamy milk",
    },
    {
      name: "Hazelnut Coffee",
      price: "₹180",
      desc: "Hot coffee infused with hazelnut flavor",
    },
    {
      name: "Caramel Coffee",
      price: "₹180",
      desc: "Creamy caramel flavored hot coffee",
    },
    {
      name: "Hot Chocolate",
      price: "₹220",
      desc: "Rich creamy hot chocolate beverage",
    },
  ],
},

"Combo Meals": {
  reverse: false,
  items: [
                                           {
  heading: "Mini Meal Combo"
},
    {
      name: "Paratha Platter",
      price: "₹360",
      desc: "Assorted parathas served with curd and pickle",
    },
    {
      name: "Dal Makhani Mini Meal",
      price: "₹380",
      desc: "Dal makhani served with rice and bread",
    },
    {
      name: "Chole with Chawal",
      price: "₹360",
      desc: "Punjabi chole served with steamed rice",
    },
    {
      name: "Dal Makhani with Jeera Rice",
      price: "₹360",
      desc: "Creamy dal makhani served with jeera rice",
    },
    {
      name: "Bhuna Paneer with Baby Naan",
      price: "₹440",
      desc: "Spicy bhuna paneer served with soft baby naan",
    },


                                           {
  heading: "Thalis"
},
    {
      name: "Khaasiyat Executive Thali",
      price: "₹450",
      desc: "Complete traditional thali with multiple dishes",
    },
    {
      name: "Khaasiyat Maharaja Thali Spl",
      price: "₹650",
      desc: "Royal special thali with premium dishes",
    },


                                           {
  heading: "Add Starter"
},
    {
      name: "Hara Bhara Kebab 2 pcs",
      price: "₹100",
      desc: "Healthy spinach and peas kebab starter",
    },
    {
      name: "Paneer Tikka 2 pcs",
      price: "₹100",
      desc: "Tandoori paneer tikka starter",
    },

 
                                           {
  heading: "Add Drink"
},
    {
      name: "Masala Chaas",
      price: "₹69",
      desc: "Refreshing spiced buttermilk",
    },
    {
      name: "Lassi",
      price: "₹99",
      desc: "Traditional creamy sweet lassi",
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