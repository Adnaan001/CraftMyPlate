// Define the images for each category
const starterImages = [
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736279925/19992_n7e6wt.jpg",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736283814/2148825110_x7qnsq.jpg",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736283875/23104_cehizj.jpg",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736283927/2148029588_gtwwh9.jpg",
];

const biryaniImages = [
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736282385/rb_24189_a9vlxx.png",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736282895/12029_tshkmz.jpg",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736283700/71488_h2umgn.jpg",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736279639/5057_yrxng7.jpg",
];

const beveragesImages = [
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736284003/41957_moa1z9.jpg",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736284051/124681_qsmoeo.jpg",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736284111/41550_lrietw.jpg",
    "https://res.cloudinary.com/dtrcnajee/image/upload/v1736280069/9502_va52t1.jpg",
];

// Helper function to get a random image
const getRandomImage = (imageArray) => imageArray[Math.floor(Math.random() * imageArray.length)];

// Menu data with dynamic image assignment
const menuData = [
    { 
        id: 1001, name: "Paneer 65", description: "Crispy fried paneer", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1002, name: "Crispy Corn", description: "Golden fried sweet corn", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1003, name: "Chicken Wings", description: "Spicy fried chicken wings", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1004, name: "Veg Spring Rolls", description: "Crunchy spring rolls", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1005, name: "Cheese Balls", description: "Cheesy and crispy bites", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1006, name: "Mutton Seekh Kebab", description: "Juicy kebabs", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1007, name: "Fish Fingers", description: "Golden fried fish fingers", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1008, name: "Chicken Lollipop", description: "Spicy drumsticks", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1009, name: "Stuffed Mushrooms", description: "Cheese-stuffed mushrooms", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1010, name: "Hara Bhara Kebab", description: "Healthy veg kebabs", category: "starter", 
        image: getRandomImage(starterImages)
    },
    { 
        id: 1011, name: "Hyderabadi Biryani", description: "Classic Hyderabadi biryani", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1012, name: "Chicken Biryani", description: "Flavorful chicken biryani", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1013, name: "Mutton Biryani", description: "Tender mutton biryani", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1014, name: "Veg Biryani", description: "Healthy veg biryani", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1015, name: "Paneer Biryani", description: "Paneer biryani with spices", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1016, name: "Egg Biryani", description: "Egg biryani with spices", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1017, name: "Fish Biryani", description: "Delicious fish biryani", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1018, name: "Prawn Biryani", description: "Savory prawn biryani", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1019, name: "Keema Biryani", description: "Minced meat biryani", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1020, name: "Mixed Biryani", description: "Mix of chicken, mutton & egg", category: "biryani", 
        image: getRandomImage(biryaniImages)
    },
    { 
        id: 1021, name: "Coke", description: "Refreshing cola drink", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1022, name: "Pepsi", description: "Cool and fizzy", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1023, name: "Mango Juice", description: "Sweet mango delight", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1024, name: "Lemonade", description: "Fresh lemon drink", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1025, name: "Masala Chai", description: "Indian spiced tea", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1026, name: "Green Tea", description: "Healthy green tea", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1027, name: "Cold Coffee", description: "Chilled coffee blend", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1028, name: "Milkshake", description: "Thick and creamy shake", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1029, name: "Mocktail", description: "Refreshing fruit mix", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
    { 
        id: 1030, name: "Smoothie", description: "Healthy fruit smoothie", category: "beverages", 
        image: getRandomImage(beveragesImages)
    },
];

export default menuData;
