import React, { useState, useEffect } from "react";
import "./HomeMenu.css";
import BuffetMenu from "./BuffetMenu";

/* 🔥 11 IMAGES */
const foodImages = [
  require("../assets/food/food1.jpeg"),
  require("../assets/food/food2.jpeg"),
  require("../assets/food/food3.jpeg"),
  require("../assets/food/food4.jpeg"),
  require("../assets/food/food5.jpeg"),
  require("../assets/food/food6.jpeg"),
  require("../assets/food/food7.jpeg"),
  require("../assets/food/food8.jpeg"),
  require("../assets/food/food9.jpeg"),
  require("../assets/food/food10.jpeg"),
  require("../assets/food/food11.jpeg"),
];
const menuData = {
  Breakfast: {
    reverse: true,
    items: [
      {
        name: "Grilled Sandwich",
        price: "₹120",
        desc: "Crispy bread with fresh veggies and cheese",
      },
      {
        name: "Masala Omelette",
        price: "₹90",
        desc: "Spicy omelette with onion & herbs",
      },
      {
        name: "Poha",
        price: "₹120",
        desc: "Light and flavorful poha with fresh herbs",
      },
      {
        name: "Upma",
        price: "₹160",
        desc: "Traditional South Indian savory breakfast",
      },
      {
        name: "Poori Bhaji (4 pcs poori)",
        price: "₹220",
        desc: "Crispy pooris served with spicy potato bhaji",
      },
      {
        name: "Chole Bhature",
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
        price: "₹180",
        desc: "Fried idli tossed in flavorful masala spices",
      },
    ],
  },

  Soups: {
    reverse: true,
    items: [
      {
        name: "Tomato Soup",
        price: "₹225",
        desc: "Classic creamy tomato soup with rich flavors",
      },
      {
        name: "Vegetable Soup",
        price: "₹225",
        desc: "Healthy mixed vegetable soup served hot",
      },
      {
        name: "Lemon Coriander Soup",
        price: "₹225",
        desc: "Refreshing soup flavored with lemon and coriander",
      },
      {
        name: "Veg Clear Soup",
        price: "₹225",
        desc: "Light and healthy clear vegetable soup",
      },
      {
        name: "Sweet Corn Soup",
        price: "₹225",
        desc: "Creamy sweet corn soup with veggies",
      },
      {
        name: "Hot & Sour Soup",
        price: "₹225",
        desc: "Spicy and tangy Indo-Chinese soup",
      },
      {
        name: "Manchow Soup",
        price: "₹225",
        desc: "Popular spicy Manchow soup with crispy noodles",
      },
      {
        name: "Cream of Mushroom",
        price: "₹290",
        desc: "Rich creamy mushroom soup with herbs",
      },
      {
        name: "Cream of Broccoli",
        price: "₹280",
        desc: "Smooth and creamy broccoli flavored soup",
      },
      {
        name: "Veg Talumein Soup",
        price: "₹280",
        desc: "Chinese-style noodle soup with vegetables",
      },
      {
        name: "Veg Tom Yum Soup",
        price: "₹280",
        desc: "Thai-inspired spicy and tangy vegetable soup",
      },
    ],
  },

  Starters: {
    reverse: false,
    items: [
      {
        name: "Crispy Corn",
        price: "₹300",
        desc: "Crunchy fried corn tossed with spices",
      },
      {
        name: "Hara Bhara Kebab",
        price: "₹300",
        desc: "Healthy kebabs made with spinach and peas",
      },
      {
        name: "Mix Veg Bhajiya",
        price: "₹300",
        desc: "Crispy assorted vegetable fritters",
      },
      {
        name: "Dahi Ke Kebab",
        price: "₹360",
        desc: "Soft kebabs stuffed with creamy hung curd",
      },
      {
        name: "Stuffed Tandoori Mushroom 2 pcs",
        price: "₹360",
        desc: "Tandoori mushrooms stuffed with flavorful filling",
      },
      {
        name: "Malai Broccoli",
        price: "₹380",
        desc: "Creamy tandoori broccoli with rich flavors",
      },
      {
        name: "Paneer Tikka Trio",
        price: "₹380",
        desc: "Three flavored paneer tikka assortment",
      },
      {
        name: "Aloo Nazakat",
        price: "₹360",
        desc: "Crispy stuffed potatoes cooked in tandoor",
      },
      {
        name: "Red Paneer Tikka",
        price: "₹380",
        desc: "Spicy red marinated paneer tikka",
      },
      {
        name: "White Paneer Tikka",
        price: "₹380",
        desc: "Creamy white paneer tikka with mild spices",
      },
      {
        name: "Green Paneer Tikka",
        price: "₹380",
        desc: "Herb-marinated green paneer tikka",
      },
      {
        name: "Afghani Soya Chaap",
        price: "₹360",
        desc: "Creamy Afghani style soya chaap",
      },
      {
        name: "Hariyali Soya Chaap",
        price: "₹340",
        desc: "Green herb marinated soya chaap",
      },
      {
        name: "Kashmiri Soya Chaap",
        price: "₹340",
        desc: "Rich Kashmiri flavored soya chaap",
      },
      {
        name: "Chinese Bhel",
        price: "₹260",
        desc: "Crunchy Indo-Chinese street style bhel",
      },
      {
        name: "Veg Crispy",
        price: "₹300",
        desc: "Crispy fried vegetables tossed in sauces",
      },
      {
        name: "Honey Chilli Potato",
        price: "₹260",
        desc: "Crispy potatoes coated with honey chilli sauce",
      },
      {
        name: "Veg Spring Roll",
        price: "₹300",
        desc: "Crispy rolls stuffed with vegetables",
      },
      {
        name: "Cheese Cigar Roll (4 pcs)",
        price: "₹380",
        desc: "Crunchy rolls filled with molten cheese",
      },
      {
        name: "Veg Manchurian (Dry)",
        price: "₹320",
        desc: "Dry Manchurian balls tossed in spicy sauce",
      },
      {
        name: "Veg Paneer Chilly (Dry)",
        price: "₹380",
        desc: "Paneer cubes tossed in spicy chilli sauce",
      },
      {
        name: "Mushroom Chilli",
        price: "₹380",
        desc: "Spicy chilli mushroom with Indo-Chinese flavors",
      },
    ],
  },

  Chinese: {
    reverse: true,
    items: [
      {
        name: "Vegetable Manchurian Gravy",
        price: "₹300",
        desc: "Veg Manchurian balls served in flavorful gravy",
      },
      {
        name: "Chilli Paneer Gravy",
        price: "₹280",
        desc: "Paneer cubes cooked in spicy chilli gravy",
      },
      {
        name: "Vegetables with Hot Garlic Sauce / Black Bean Sauce",
        price: "₹280",
        desc: "Fresh vegetables tossed in Chinese style sauces",
      },
      {
        name: "Vegetable Fried Rice",
        price: "₹280",
        desc: "Classic fried rice loaded with vegetables",
      },
      {
        name: "Schezwan Fried Rice",
        price: "₹320",
        desc: "Spicy Schezwan flavored fried rice",
      },
      {
        name: "Mushroom Fried Rice",
        price: "₹380",
        desc: "Fried rice tossed with fresh mushrooms",
      },
      {
        name: "Hakka Noodle",
        price: "₹280",
        desc: "Classic Indo-Chinese hakka noodles",
      },
      {
        name: "Chilly Garlic Noodles",
        price: "₹280",
        desc: "Spicy noodles flavored with garlic and chilli",
      },
      {
        name: "Schezwan Garlic Noodle",
        price: "₹320",
        desc: "Schezwan style garlic noodles with bold flavors",
      },
      {
        name: "Vegetable Chopsuey",
        price: "₹360",
        desc: "Crispy noodles topped with sweet tangy vegetables",
      },
      {
        name: "Sizzed in China",
        price: "₹480",
        desc: "Hot sizzling Chinese platter with rich flavors",
      },
      {
        name: "God Father Delight",
        price: "₹480",
        desc: "Special chef crafted sizzling delight",
      },
      {
        name: "Chef’s Special Sizzler",
        price: "₹480",
        desc: "Signature sizzling platter by the chef",
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
      name: "----- Milkshakes 300 ml -----",
      price: "",
      desc: "",
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
      name: "----- Cold Coffee 300 ml -----",
      price: "",
      desc: "",
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
      name: "----- Miscellaneous -----",
      price: "",
      desc: "",
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
      name: "----- Hot Items -----",
      price: "",
      desc: "",
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
      name: "----- Hot Coffee -----",
      price: "",
      desc: "",
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
      name: "----- Mini Meal Combo -----",
      price: "",
      desc: "",
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
      name: "----- Thalis -----",
      price: "",
      desc: "",
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
      name: "----- Add Starter -----",
      price: "",
      desc: "",
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
      name: "----- Add Drink -----",
      price: "",
      desc: "",
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



const HomeMenu = () => {
  const [active, setActive] = useState("Breakfast");
  const [currentImg, setCurrentImg] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setCurrentImg(0);

    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setCurrentImg((prev) => (prev + 1) % foodImages.length);
        setFade(true); // fade in next image
      }, 600); // fade duration

    }, 3500); // total duration

    return () => clearInterval(interval);
  }, [active]);

  const current = menuData[active];
  const categories = Object.keys(menuData);

  return (
    <>
    <section className="HomeMenu">
   {/* <div className="HomeMenu-bg"></div> */}
      {/* HEADER */}
      <div className="HomeMenu-header">
        <span>OUR MENU</span>
        <h2>Delicious Food</h2>

        <div className="HomeMenu-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION */}
      <div className={`HomeMenu-section ${current.reverse ? "reverse" : ""}`}>

        {/* 🔥 IMAGE (SMOOTH) */}
      <div className="HomeMenu-image">
  <img
    key={currentImg}   // 🔥 THIS FIXES EVERYTHING
    src={foodImages[currentImg]}
    className={`menu-img ${fade ? "show" : ""}`}
    alt="food"
  />
</div>

        {/* CONTENT */}
<div className="HomeMenu-list">
  <h3 className="HomeMenu-title">{active}</h3>

  <div className="HomeMenu-scroll">
    {current.items.map((item, i) => (
      <div key={i} className="HomeMenu-item">
        <div className="HomeMenu-top">
          <h4>{item.name}</h4>
          <div className="HomeMenu-dots"></div>
          <span className="HomeMenu-price">{item.price}</span>
        </div>

        <p>{item.desc}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>

    <BuffetMenu/>
    </>
  );
};

export default HomeMenu;