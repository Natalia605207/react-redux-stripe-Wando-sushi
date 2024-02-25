const dataDishes = [
    {
        id: 1,
        price: 2,
        img: 'noodle-soup',
        name: 'Laksa Soup',
        ingredients: 'Miso, Rice noodles, Carrot, Broccoli, pumpkin seeds',
        category: 'SOUP'
    },

    {
        id: 2,
        price: 5,
        img: 'misosiru',
        name: 'Misosiru Soup',
        ingredients: 'Miso, Tofu, Wakame, Dashi, Noodles, Egg',
        category: 'SOUP'
    },

    {
        id: 3,
        price: 4,
        img: 'tomorokoshi',
        name: 'Tomorokoshi Soup',
        ingredients: 'Creamy sweet corn soup, Crab meat, Parsley',
        category: 'SOUP'
    },

    {
        id: 4,
        price: 12,
        img: 'ramen',
        name: 'Ramen Soup',
        ingredients: 'Noodle soup in Ramen broth with Crab meat, Shrimp, Spinach, Leek',
        category: 'SOUP'
    },

    {
        id: 5,
        price: 3,
        img: 'house',
        name: 'House Salad',
        ingredients: 'Iceberg Lettuce, Cucumber, Cherry Tomato',
        category: 'SALAD'
    },

    {
        id: 6,
        price: 6,
        img: 'green',
        name: 'Green Salad',
        ingredients: 'Spinach, Arugula, Zucchini, Tomato, Sesame-peanut dressing',
        category: 'SALAD'
    },

    {
        id: 7,
        price: 3,
        img: 'wild',
        name: 'Wild Mix Salad',
        ingredients: 'Spinach, Arugula, Carrot, Coliflower, Brown rice',
        category: 'SALAD'
    },

    {
        id: 8,
        price: 17,
        img: 'shrimp-salad',
        name: 'Shrimp Salad',
        ingredients: 'Scallop, Shrimp, Squid, Sweet sesame chili sauce',
        category: 'SALAD'
    },

    {
        id: 9,
        price: 8,
        img: 'salmon-sushi',
        name: 'Salmon Sakana',
        ingredients: 'Torched press sushi with sushi rice topped with salmon, 6 pc',
        category: 'SUSHI'
    },

    {
        id: 10,
        price: 25,
        img: 'shrimp-sushi',
        name: 'Shrimp Sakana',
        ingredients: 'Torched press sushi with sushi rice topped with shrimp, 6 pc',
        category: 'SUSHI'
    },

    {
        id: 11,
        price: 21,
        img: 'sushi-set',
        name: 'Set Sakana',
        ingredients: 'Fresh tuna, salmon, scallop, nigiri, shrimp sushi, 5 pc',
        category: 'SUSHI'
    },

    {
        id: 12,
        price: 13,
        img: 'salmon-shrimp',
        name: 'Paradise Sakana',
        ingredients: 'Torched press sushi topped with shrimp and salmon, 4 pc',
        category: 'SUSHI'
    },

    {
        id: 13,
        price: 27,
        img: 'super',
        name: 'Super Sakana',
        ingredients: 'Shrimp, Scallop, Fresh tuna, Salmon, Avocado, Sea ​​eel, Nigiri sushi, 8 pc',
        category: 'SUSHI'
    },

    {
        id: 14,
        price: 9,
        img: 'tuna',
        name: 'Tuna Sakana',
        ingredients: 'Torched press sushi topped with tuna, 6 pc',
        category: 'SUSHI'
    },

    {
        id: 15,
        price: 10,
        img: 'tashimi',
        name: 'Tashimi Roru',
        ingredients: 'Egg omelet, Salmon, Cucumber, Sushi rice, Philadelphia cheese, 8 pc',
        category: 'ROLLS'
    },

    {
        id: 16,
        price: 5,
        img: 'salmon-roru',
        name: 'Salmon Roru',
        ingredients: 'Salmon, Sushi rice, Nori, Wasabi, Ginger, 6 pc',
        category: 'ROLLS'
    },

    {
        id: 17,
        price: 25,
        img: 'philadelphia',
        name: 'Philadelphia Roru',
        ingredients: 'Steamed salmon, Sushi rice, Philadelphia cheese, Avocado, Wasabi, 6 pc',
        category: 'ROLLS'
    },

    {
        id: 18,
        price: 27,
        img: 'yoshimi',
        name: 'Yoshimi Roru',
        ingredients: 'Salmon, Sushi rice, Philadelphia cheese, Cucumber, Nori, 8 pc',
        category: 'ROLLS'
    },

    {
        id: 19,
        price: 5,
        img: 'wando',
        name: 'Wando Roru',
        ingredients: 'Salmon, Steamed eel, Crab meat, Avocado, Steamed tuna, 4 pc',
        category: 'ROLLS'
    },

    {
        id: 20,
        price: 13,
        img: 'kino',
        name: 'Kino Roru',
        ingredients: 'Smoked eel, Masago, Cheese, Tamago, Sushi rice, Mamenori, 6 pc',
        category: 'ROLLS'
    },

    {
        id: 21,
        price: 18,
        img: 'kioto',
        name: 'Kioto Roru',
        ingredients: 'Crab meat, Avocado, Sushi rice, Nori, Tobiko, Wasabi, 6 pc',
        category: 'ROLLS'
    },

    {
        id: 22,
        price: 25,
        img: 'tentoro',
        name: 'Tentoro Roru',
        ingredients: 'Shrimp, Rice, Avocado, Nori, Green onion, Daikon radish, 8 pc',
        category: 'ROLLS'
    },

    
    {
        id: 23,
        price: 13,
        img: 'fusion',
        name: 'Fusion Roru',
        ingredients: 'Salmon, Cucumber, Cheese, Green onion, Rice, Sesame, Tobiko, 6 pc',
        category: 'ROLLS'
    },

    {
        id: 24,
        price: 13,
        img: 'simple-set',
        name: 'Simple Set',
        ingredients: 'Kino (4pc), Philadelphia (4pc), Fusion (4pc)',
        category: 'SETS'
    },

    {
        id: 25,
        price: 23,
        img: 'hashimi-set',
        name: 'Hashimi Set',
        ingredients: 'Salmon Roru (6pc), Avocado Roru (6pc), Yoshimi (4pc), Abe (2pc), Sizo (4pc)',
        category: 'SETS'
    },

    {
        id: 26,
        price: 26,
        img: 'nuguru-set',
        name: 'Nuguru Set',
        ingredients: 'Yoshimi Magi (8pc), Yoshimi (8pc), Yoshimi Kato (8pc), Salmon Magi (6pc)',
        category: 'SETS'
    },

    {
        id: 27,
        price: 28,
        img: 'yoshido-set',
        name: 'Yoshido Set',
        ingredients: 'Kaisa Roru (8pc), Shrimp Roru (8pc), Geisha Roru (8pc), Unagi Roru (6pc)',
        category: 'SETS'
    },

    {
        id: 28,
        price: 19,
        img: 'futso-set',
        name: 'Futso Set',
        ingredients: 'Tenta Roru (6pc), Philadelphia Roru (6pc), Kino Roru (7pc)',
        category: 'SETS'
    },

    {
        id: 29,
        price: 28,
        img: 'delicious-set',
        name: 'Delicious Set',
        ingredients: 'Salmon(6pc), Kioto(4pc), Tino(2pc), Tenada(8pc), Ninjo(1pc), Scallop(1pc)',
        category: 'SETS'
    },

    {
        id: 30,
        price: 3,
        img: 'chokokeki',
        name: 'Chokokeki',
        ingredients: 'milk chocolate cake with soft caramel and mascarpone cheese custard',
        category: 'DESSERTS'
    },

    {
        id: 31,
        price: 6,
        img: 'sweet-dream',
        name: 'Sweet dream',
        ingredients: 'Sweet rice topped with mango slices, raspberry and mint leaves',
        category: 'DESSERTS'
    },

    {
        id: 32,
        price: 4,
        img: 'tiramisu',
        name: 'Tiramisu',
        ingredients: 'Mascarpone cream, chocolate-coffee sponge cake',
        category: 'DESSERTS'
    },

    {
        id: 33,
        price: 28,
        img: 'cheesecake',
        name: 'Sweety',
        ingredients: 'Yummy cheesecake, nuts, caramel, raspberry and mint leaves',
        category: 'DESSERTS'
    }
]

export default dataDishes;