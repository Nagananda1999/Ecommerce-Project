import product1 from "./assets/products/product1.webp"
import product2 from "./assets/products/product2.webp"
import product3 from "./assets/products/product3.webp"
import product4 from "./assets/products/product4.webp"
import product5 from "./assets/products/producct5.webp"
import product6 from "./assets/products/product6.webp"
import product7 from "./assets/products/product7.webp"
import product8 from "./assets/products/product8.webp"
import product9 from "./assets/products/product9.webp"
import product10 from "./assets/products/product10.webp"
import product11 from "./assets/products/product11.webp"
import product12 from "./assets/products/product12.webp"
import product13 from "./assets/products/product13.webp"
import product14 from "./assets/products/product14.webp"
import product15 from "./assets/products/product15.webp"
import product16 from "./assets/products/product16.webp"
import product17 from "./assets/products/product17.webp"
import product18 from "./assets/products/product18.webp"
import product19 from "./assets/products/product19.webp"
import product20 from "./assets/products/product20.webp"
import product21 from "./assets/products/product21.webp"
import product22 from "./assets/products/product22.webp"
import product23 from "./assets/products/product23.webp"
import product24 from "./assets/products/product24.webp"
import product25 from "./assets/products/product25.webp"
import product26 from "./assets/products/product26.webp"
import product27 from "./assets/products/product27.webp"
import product28 from "./assets/products/product28.webp"
import product29 from "./assets/products/product29.png"
import product30 from "./assets/products/product30.webp"
import product31 from "./assets/products/product31.webp"
import product32 from "./assets/products/product32.webp"
import product33 from "./assets/products/product33.webp"
import { faker } from '@faker-js/faker';
const Products = [
    {
        id:1,
        productName:"TORNADO PRO 4 JACKET",
        price:8950,
        productImage:product1,
        shortDiscription:"The go-to jacket for the go-anywhere explorer.",
        longDiscription:"Now in its all-new and updated 4th avatar, the Tornado Pro is our quintessential motorcycling jacket, crafted to be as much at home in the city, as on an adventure of a lifetime!",
        productCategory:"Jacket",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:2,
        productName:"CYPHER GT JACKET",
        price:4950,
        productImage:product2,
        shortDiscription:"Minimalistic design with maximum protection!",
        longDiscription:"A minimal and monotone design, the Cypher GT jacket is the ideal jacket for someone looking for an understated yet stylish jacket for their daily city commutes",
        productCategory:"Jacket",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:3,
        productName:"STEALTH AIR PRO JACKET",
        price:9850,
        productImage:product3,
        shortDiscription:"Introducing the all-new Stealth Air Pro Jacket",
        longDiscription:"Combining the best of both worlds, the Stealth Air Pro Jacket is equipped with full-length ADV touring protection and also best-in-class maximum ventilation.",
        productCategory:"Jacket",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:4,
        productName:"HELIUM GT 2 JACKET - Black Red",
        price:5950,
        productImage:product4,
        shortDiscription:"Introducing the Helium GT 2 Jacket. Lighter than Air!",
        longDiscription:"Our lightest jacket yet, with best-in-class ventilation, without compromising on protection.The Helium GT 2 is the perfect versatile jacket for city commutes and highway rides.",
        productCategory:"Jacket",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:11,
        productName:"URBAN X JACKET 2022",
        price:5950,
        productImage:product11,
        shortDiscription:"Ready for everyday adventures, with a splash of camouflage.",
        longDiscription:"With its active fit and fundamental features, the Urban transitions effortlessly from the weekday commute to the weekend getaway.",
        productCategory:"Jacket",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:5,
        productName:"STORM EVO PANTS 2023 - Black ",
        price:8950,
        productImage:product5,
        shortDiscription:"With understated aesthetics and a super-functional design, the Stealth Evo pants are engineered for the perpetual traveller who is unphased through any terrain, weather or ride.",
        longDiscription:"",
        productCategory:"Pant",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    
    {
        id:6,
        productName:"STEALTH EVO PANTS - Grey",
        price:8950,
        productImage:product6,
        shortDiscription:"With understated aesthetics and a super-functional design, the Stealth Evo pants are engineered for the perpetual traveller who is unphased through any terrain, weather or ride.",
        longDiscription:"",
        productCategory:"Pant",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:12,
        productName:"AIRTEX PANTS",
        price:7250,
        productImage:product12,
        shortDiscription:"With their sleek, practical and functional design, the Airtex pants are perfect for use round the year.",
        longDiscription:"",
        productCategory:"Pant",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },

    {
        id:7,
        productName:"STORM EVO 2 GLOVES - Sand Brown Black",
        price:5000,
        productImage:product7,
        shortDiscription:"A pair of featherweight gloves that knocks out heavyweights.",
        longDiscription:"The first in our revamped line-up of full gauntlet gloves, the Storm Evo 2 Gloves are the successor to our popular Inferno Pro Gloves, now renamed and included in the Storm Evo kit. Nimble and lightweight, the Storm Evo 2 Gloves are perfect for the minimalist overlander looking for comprehensive protection and versatile performance.",
        productCategory:"Gloves",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:13,
        productName:"STORM EVO 3 GLOVES",
        price:5750,
        productImage:product13,
        shortDiscription:"Featherweight gloves that knock out heavyweights.",
        longDiscription:"The Storm Evo 3 Gloves are the latest avatar of our full gauntlet gloves. Nimble and lightweight, the Storm Evo 3 Gloves are perfect for the minimalist overlander looking for comprehensive protection and versatile performance.",
        productCategory:"Gloves",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:14,
        productName:"HELIUM GT GLOVES",
        price:2350,
        productImage:product14,
        shortDiscription:"Introducing the Helium GT Gloves ",
        longDiscription:"Our lightest gloves yet, with best-in-class ventilation, without compromising on protection.The Helium gloves are the perfect for city commutes and highway rides.",
        productCategory:"Gloves",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:15,
        productName:"DRY ICE WATERPROOF WINTER GLOVES",
        price:4250,
        productImage:product15,
        shortDiscription:"DRY ICE WATERPROOF WINTER GLOVES ",
        longDiscription:"Introducing the all-new Dry Ice Waterproof Winter Gloves, the ultimate solution for keeping your hands warm and dry in cold or wet weather conditions. Designed with our advanced all-season textile fabric and integrated DryCore technology.Say goodbye to cold and wet hands, embrace the coldest conditions with confidence, and ride in comfort.",
        productCategory:"Gloves",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:16,
        productName:"TORNADO PRO 3 GLOVES",
        price:3600,
        productImage:product16,
        shortDiscription:"The go-to gloves for the go-anywhere explorer, now with CE certification! ",
        longDiscription:"The Tornado Pro 3 gloves are the latest evolved avataar of our popular Shield Pro 2 gloves. With an all new fit, updated protection features and a revamped design aesthetic, the gloves have been renamed to Tornado Pro 3, to bring them into the Rynox Tornado Pro family.",
        productCategory:"Gloves",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:17,
        productName:"H2GO PRO 3 RAIN JACKET",
        price:1350,
        productImage:product17,
        shortDiscription:"Now in its 3rd avatar H2Go Pro 3 Rain Jacket is engineered with a single focus on ensuring an unparalleled riding experience, even in the harshest downpours.",
        longDiscription:"As much as motorcyclists love riding in the monsoons, we hate getting wet even more. We want to experience the lush greenery, the wet tarmac, and the smell of fresh Earth that the monsoon brings, but we want to do it while staying dry. The H2Go Pro 3 Rain Jacket is the answer.",
        productCategory:"Rain_gears",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:18,
        productName:"H2GO PRO RAIN PANTS",
        price:1200,
        productImage:product18,
        shortDiscription:"The H2Go Pro Rain Pants are purpose-built with one single objective, to keep you dry when you are riding in the rain.",
        longDiscription:"As much as motorcyclists love riding in the monsoons, we hate getting wet even more. We want to experience the lush greenery, the wet tarmac, and the smell of fresh Earth that the monsoon brings, but we want to do it while staying dry.",
        productCategory:"Rain_gears",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:19,
        productName:"H2GO PRO WATERPROOF SOCKS",
        price:2650,
        productImage:product19,
        shortDiscription:"The H2Go Pro Waterproof Socks are engineered for a singular purpose, to keep your feet dry when you are riding in rain on the highway or crossing a river in the mountains.",
        longDiscription:"Riding in monsoon is an amazing experience, but no one likes wet feet. Wet feet dampen your spirits. Dry feet let you immerse yourself in your adventure.Now, with H2Go Pro Waterproof Socks, defy the elements and experience ultimate dry comfort.",
        productCategory:"Rain_gears",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:20,
        productName:"SWARM WINTER JACKET",
        price:1100,
        productImage:product20,
        shortDiscription:"The Swarm Winter Jacket is purpose-built to be worn under a riding jacket on a motorcycle, so that you never need to slow down when the temperature goes down.",
        longDiscription:"To stay warm when riding in winter, the trick is to layer-up and block body heat by using slim, light but insulated layers. The Swarm Winter Jacket is equipped with an extremely lightweight and insulated Dupont Sorona fill and has a slim fit so you can wear it under your riding jacket.",
        productCategory:"Winter_Jacket",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:21,
        productName:"VAPOUR PRO PERFORMANCE BASE LAYER - UPPER",
        price:1500,
        productImage:product21,
        shortDiscription:"Introducing the all-new Vapour Pro Performance Base Layer - Upper.",
        longDiscription:"Motorcycling is an intense sport that’s mostly sweaty, tiring and drains your body.To help keep you fresh and comfortable through the day, we made this performance base layer; which is perfect not only for motorcycling, but for all outdoor sports.",
        productCategory:"Base_Layer",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:22,
        productName:"VAPOUR PRO PERFORMANCE BASE LAYER - LOWER",
        price:1500,
        productImage:product22,
        shortDiscription:"Introducing the all-new Vapour Pro Performance Balaclava.",
        longDiscription:"Motorcycling is an intense sport that’s mostly sweaty, tiring and drains your body.To help keep you fresh and comfortable through the day, we made this performance base layer; which is perfect not only for motorcycling, but for all outdoor sports.",
        productCategory:"Base_Layer",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:23,
        productName:"VAPOUR PRO PERFORMANCE - BALACLAVA",
        price:600,
        productImage:product23,
        shortDiscription:"Introducing the all-new Vapour Pro Performance Base Layer - Lower.",
        longDiscription:"Motorcycling is an intense sport that’s mostly sweaty, tiring and drains your body.To help keep you fresh and comfortable through the day, we made this performance base layer; which is perfect not only for motorcycling, but for all outdoor sports.",
        productCategory:"Base_Layer",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:8,
        productName:"BASTION BIONIC KNEE GUARDS - Blue",
        price:3950,
        productImage:product8,
        shortDiscription:"",
        longDiscription:"Bastion Bionic Knee Guards are engineered to deliver next-generation protection, performance and comfort. The bionic design of Bastion follows the natural curve of your knees, providing maximum coverage to knees and shin even when fully bent, providing articulated protection that will make you forget you are wearing knee guards. The Bastion Bionic Knee Guards are CE certified, lightweight, ultra-breathable and will make the perfect addition to your riding kit.",
        productCategory:"Knee_Guard",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:9,
        productName:"MAGNAPOD TANK BAG",
        price:3575,
        productImage:product9,
        shortDiscription:"",
        longDiscription:"The Magnapod Tank Bag is specifically designed for the motorcyclist who prefers to travel light. With its sleek form factor, streamlined side pockets and 21 ltr un-expanded volume, the Magnapod is the perfect mid-sized tank bag.",
        productCategory:"Tank_Bag",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    
    },
    {
        id:24,
        productName:"NAVIGATOR TANK BAG",
        price:2200,
        productImage:product24,
        shortDiscription:"Ideal for riders looking to carry only the essentials on the tank, the Navigator tank bag is the perfect on-the-road EDC bag.",
        longDiscription:"",
        productCategory:"Tank_Bag",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:10,
        productName:"EXPEDITION SADDLEBAGS - STORMPROOF - Light Grey",
        price:6950,
        productImage:product10,
        shortDiscription:"Introducing the Expedition Series - Stormproof Motorcycle Luggage System!",
        longDiscription:"Now in its 2nd evolved avatar, with increased volume and a more robust shell; the modular and stormproof Expedition Trail Bag 2 is the multi-utility tool of motorcycle bags.",
        productCategory:"Saddlebag",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:25,
        productName:"DRYSTACK SADDLEBAGS - STORMPROOF",
        price:4350,
        productImage:product25,
        shortDiscription:"Inspired by classic holdall bags, the stormproof Drystack Saddlebags are simplistic in design, yet highly effective.",
        longDiscription:"",
        productCategory:"Saddlebag",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    
    {
        id:26,
        productName:"EXPEDITION TRAIL BAG 2 - STORMPROOF",
        price:4150,
        productImage:product26,
        shortDiscription:" Introducing the Expedition Series - Stormproof Motorcycle Luggage System!",
        longDiscription:"Now in its 2nd evolved avatar, with increased volume and a more robust shell; the modular and stormproof Expedition Trail Bag 2 is the multi-utility tool of motorcycle bags.",
        productCategory:"Tail_bag",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:27,
        productName:"NAVIGATOR TAIL BAG 50L",
        price:6350,
        productImage:product27,
        shortDiscription:" Introducing the Navigator Series - Adventure Motorcycle Luggage System!",
        longDiscription:"The Navigator Tail Bag 50L is our most advanced bag yet, made from materials developed primarily for use by tactical forces and white water rafting.",
        productCategory:"Tail_bag",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:28,
        productName:"EXPEDITION DRY BAG 2 - STORMPROOF",
        price:1350,
        productImage:product28,
        shortDiscription:"Introducing the Expedition Series - Stormproof Motorcycle Luggage System!",
        longDiscription:"Now in its 2nd evolved avatar, with increased volume and a more robust shell; the Expedition Dry Bag 2 is perfect for explorers whose adventures may lead them into any weather.",
        productCategory:"Utility_bag",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:29,
        productName:"NAVIGATOR TAIL BAG 50L - MOUNTING STRAPS SET",
        price:800,
        productImage:product29,
        shortDiscription:"Replacement/Spare Mounting Straps for the Navigator Tail Bag 50L",
        longDiscription:"This set of straps makes up the quick-release, hasslefree and zero-displacement mounting system for the Navigator Tail Bag 50L.",
        productCategory:"Luggage_spare",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:30,
        productName:"EXPEDITION TRAIL BAG MOUNTING STRAPS",
        price:800,
        productImage:product30,
        shortDiscription:"Replacement/Spare Mounting Straps for the EXPEDITION TRAIL BAG 2 - STORMPROOF MOUNTING STRAPS.",
        longDiscription:"This set of straps makes up the quick-release, hassle-free, and zero-displacement mounting system for the EXPEDITION TRAIL BAG 2 - STORMPROOF MOUNTING STRAPS",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:31,
        productName:"GRIPPER REFLECTIVE BUNGEE - Pack of 1",
        price:250,
        productImage:product31,
        shortDiscription:"Secure, quick, adaptable, and with embedded retro reflective filaments; you can never have too many Gripper Bungees.",
        longDiscription:"",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:32,
        productName:"GRIPPER REFLECTIVE BUNGEE - Pack of 2",
        price:490,
        productImage:product32,
        shortDiscription:"Secure, quick, adaptable, and with embedded retro reflective filaments; you can never have too many Gripper Bungees.",
        longDiscription:"",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
    {
        id:33,
        productName:"CAMO WORDMARK T-SHIRT",
        price:549,
        productImage:product33,
        shortDiscription:"Introducing the Camo Wordmark T-shirt, the first official merch from Rynox!",
        longDiscription:"Flaunt your passion for motorcycling, with the subtle grey tone camo print.",
        fastDelivery: faker.datatype.boolean(),
        ratings:[1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)],
    },
];
export default Products;