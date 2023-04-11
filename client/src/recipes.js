import piePicture from "./assets/images/IMG_1341.jpg"

const data = 
{
  recipes: [{
    _id: 0,
    name: "Deep-Dish Apple Pie",
    author: {
      id: 0,
      name: "Dana Riley"
    },
    difficulty: "Medium",
    time: "2 hours",
    background: "Merry Christmas, Dana!  🎄",
    ingredients: [
      {
        id: 0,
        quantity: `2 to 2 ½ c.`,
        name:`sugar (depending on tartness of apples)`
      },
      {
        id: 1,
        quantity: `1 ½ t.`,
        name:`Saigon cinnamon (or 2 t. less strong cinnamon)`
      },
      {
        id: 2,
        quantity: `¾ to 1 t.`,
        name:`1/3 of a nutmeg, grated—about ¾ to 1 t`
      },
      {
        id: 3,
        quantity: `2 T.`,
        name:`flour`
      },
      {
        id: 4,
        quantity: `2 T.`,
        name:`tapioca flour`
      },
      {
        id: 5,
        quantity: `3/4 t.`,
        name:`salt`
      },
      {
        id: 6,
        quantity: `12 to 14 c.`,
        name:`peeled, sliced green apples—Pippin or Granny Smith. Ripe apples will be less “apple” green and more yellow-green. They should also have a blush on one side.`
      },
      {
        id: 7,
        quantity: `2 T.`,
        name:`butter`
      },
      {
        id: 8,
        quantity: `2 T.`,
        name:`Crust for Deep-Dish 2-Crust pie (see recipe)`
      }
    ],
    steps: [
      {
        id: 0,
        step: `Pie will be cooked on oven’s middle rack. Place 1 rack in the bottom half of the oven, under the rack where pie will be cooked. Put a large piece of heavy-duty aluminum foil on lower rack, and turn all edges up 1 inch like a large sheet pan. Make sure it is larger than the pie, so the foil will catch any drippings. Preheat oven to 375.`
      },
      {
        id: 1,
        step: `Mix sugar, flours, salt and spices well. Set aside.`
      },
      {
        id: 2,
        step: `Roll out bottom crust, fit into pan. Cover all surfaces with plastic wrap. Roll out top crust, leave on board covered with plastic wrap.`
      },
      {
        id: 3,
        step: `Peel and core apples. Cut 1/4” thick. Place in a large bowl. Add sugar mixture and toss to coat all pieces. Turn into bottom crust, making sure slices are lying flat to allow a minimum of air pockets. Dot with butter. Run fingers under water, and wet all around top edge of crust. Place top crust over. Trim all edges with about 1” overhang from edge of rim, pressing top crust onto bottom crust. Roll overhang under itself to create a standing edge on top of pie rim. Flute with knuckles.`
      },
      {
        id: 4,
        step: `Cut decorative slits on top crust to allow steam to escape. Sprinkle top with sugar if desired. Bake 1 hour 10 minutes to 1 hour 30 minutes, until a knife inserted through slits goes in without resistance—but check at 30, 45, and minutes. If fluted edges are browning too quickly, cover with strips of foil.`
      },
      {
        id: 5,
        step: `Cool at least 30 minutes before serving. Refrigerate leftovers.`
      }
    ],
    images: [
      {
        id: 0,
        picture: piePicture,
        alt: "pie"
      }
    ]
  }, 
  {
    _id: 1,
    name: "Cap'n Crunch Cookies",
    author: {
      id: 1,
      name: "Adam Payne"
    },
    difficulty: "Easy",
    time: "1 hours",
    background: "I update this all the time!\n\nemail me at adampaynewebdev@gmail.com",
    ingredients: [
      {
        id: 0,
        quantity: `1 c.`,
        name:`Softened Salted Butter`
      },
      {
        id: 1,
        quantity: `1 ½ c.`,
        name:`Sugar`
      },
      {
        id: 2,
        quantity: `2`,
        name:`Whole Eggs`
      },
      {
        id: 3,
        quantity: `2 t.`,
        name:`Vanilla Paste`
      },
      {
        id: 4,
        quantity: `1 c.`,
        name:`AP Flour`
      },
      {
        id: 5,
        quantity: `2 c.`,
        name:`Pulverized Cap'n Crunch Cereal`
      },
      {
        id: 6,
        quantity: `1 ½ t.`,
        name:`Cream of Tartar`
      },
      {
        id: 7,
        quantity: `½ t.`,
        name:`Baking Soda`
      },
      {
        id: 8,
        quantity: `1 ½ t.`,
        name:`Salt`
      }
    ],
    steps: [
      {
        id: 0,
        step: `Preheat oven to 350 degrees.`
      },
      {
        id: 1,
        step: `In a large mixing bowl, cream butter and sugar for 4-5 minutes until light and fluffy.  Scrape the sides of the bowl and add the eggs and vanilla. Cream for 1-2 minutes longer.`
      },
      {
        id: 2,
        step: `Pulverize about ⅔ of a 12 oz box of Cap'n Crunch Cereal in a food processor or blender until it becomes a powder.`
      },
      {
        id: 3,
        step: `Stir in flour, Cap'n Crunch, cream of tartar, baking soda, and salt, just until combined.`
      },
      {
        id: 4,
        step: `If time allows, wrap the dough and let refrigerate for 20-30 minutes.  Roll into small balls until round and smooth.`
      },
      {
        id: 5,
        step: `Place on a parchment paper-lined baking sheet. Bake for 12-15 minutes on the middle rack.  Let cool for several minutes on baking sheet before removing from the pan.`
      }
    ],
    images: [
      {
        id: 0,
        picture: "https://pbs.twimg.com/profile_images/1311311775862853636/_kfB0Fl4_400x400.png",
        alt: "The Cap'n"
      }
    ]
  },
  {
    _id: 2,
    name: "Cottage Cheese Pancakes",
    author: {
      id: 0,
      name: "Dana Riley"
    },
    authorId: 0,
    difficulty: "Easy",
    time: "20 minutes",
    background: "They're good for you too!",
    ingredients: [
      {
        id: 0,
        quantity: `6`,
        name:`Eggs`
      },
      {
        id: 1,
        quantity: `3 T.`,
        name:`Water`
      },
      {
        id: 2,
        quantity: `½ t.`,
        name:`Salt`
      },
      {
        id: 3,
        quantity: `1 pint`,
        name:`Non-fat Cottage Cheese`
      },
      {
        id: 4,
        quantity: `3/4 c.`,
        name:`Flour`
      }
    ],
    steps: [
      {
        id: 0,
        step: `Beat eggs, water and salt with whisk or hand mixer.`
      },
      {
        id: 1,
        step: `Add cottage cheese, mix well.`
      },
      {
        id: 2,
        step: `Stir in flour, mix just until blended.`
      },
      {
        id: 3,
        step: `Fry on preheated non-stick pan or griddle, lightly sprayed with oil, until browned on both sides.`
      },
      {
        id: 4,
        step: `Serve with maple syrup, or lemon juice and confectioners sugar.`
      }
    ],
    images: [
      {
        id: 0,
        picture: `https://hips.hearstapps.com/hmg-prod/images/cottage-cheese-pancakes-blueberry-compote-1520271796.jpg?crop=1.00xw:0.668xh;0,0&resize=1200:*`,
        alt: `Cottage Cheese Pancakes with Blueberry Compote`
      }
    ]
  },
  {
    _id: 3,
    name: "Tasty's Chocolate Chip Cookies",
    author: {
      name: "Alvin Zhou"
    },
    difficulty: "Easy",
    time: "30 minutes",
    background: `This is Tasty's Recipe. It's very good!\n\nhttps://tasty.co/recipe/the-best-chewy-chocolate-chip-cookies`,
    ingredients: [
      {
        id: 0,
        quantity: `½ c`,
        name:`Granulated Sugar`
      },
      {
        id: 1,
        quantity: `3/4 c.`,
        name:`Brown Sugar, packed`
      },
      {
        id: 2,
        quantity: `1 t.`,
        name:`Salt`
      },
      {
        id: 3,
        quantity: `½ c.`,
        name:`Butter, melted`
      },
      {
        id: 4,
        quantity: `1`,
        name:`Egg`
      },
      {
        id: 5,
        quantity: `1 t.`,
        name: `Vanilla Extract`
      },
      {
        id: 6,
        quantity: `1 1/4 c.`,
        name: `AP Flour`
      },
      {
        id: 7,
        quantity: `½ t.`,
        name: `Baking Soda`
      },
      {
        id: 8,
        quantity: `8 oz`,
        name: `Semi-Sweet and Dark Chocolates`
      }
    ],
    steps: [
      {
        id: 0,
        step: `In a large bowl, whisk together the sugars, salt, and butter until a paste forms with no lumps.`
      },
      {
        id: 1,
        step: `Whisk in the egg and vanilla, beating until light ribbons fall off the whisk and remain for a short while before falling back into the mixture.`
      },
      {
        id: 2,
        step: `Sift in the flour and baking soda, then fold the mixture with a spatula (Be careful not to overmix, which would cause the gluten in the flour to toughen resulting in cakier cookies).`
      },
      {
        id: 3,
        step: `Fold in the chocolate chunks, then chill the dough for at least 30 minutes. For a more intense toffee-like flavor and deeper color, chill the dough overnight. The longer the dough rests, the more complex its flavor will be.`
      },
      {
        id: 4,
        step: `Preheat oven to 350°F (180°C). Line a baking sheet with parchment paper.`
      },
      {
        id: 5,
        step: `Scoop the dough with an ice-cream scoop onto a parchment paper-lined baking sheet, leaving at least 4 inches (10 cm) of space between cookies and 2 inches (5 cm) of space from the edges of the pan so that the cookies can spread evenly.`
      },
      {
        id: 6,
        step: `Bake for 12-15 minutes, or until the edges have started to barely brown.`
      },
      {
        id: 7,
        step: `Cool completely before serving.`
      }
    ],
    images: [
      {
        id: 0,
        picture: `https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg`,
        alt: `Alvin Zhou's Amazing Cookies`
      },
      {
        id: 1,
        picture: `https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/`,
        alt: `Alvin Zhou's Amazing Cookies`
      },
      {
        id: 2,
        picture: `https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-articleLarge.jpg`,
        alt: `Alvin Zhou's Amazing Cookies`
      },
      {
        id: 3,
        picture: `https://cookiesandcups.com/wp-content/uploads/2021/01/brownbutterchocolatechipcookies-8.jpg`,
        alt: `Alvin Zhou's Amazing Cookies`
      },
      {
        id: 4,
        picture: `https://assets.epicurious.com/photos/56ba285dba01da483a2cd5c2/`,
        alt: `Alvin Zhou's Amazing Cookies`
      }
    ]
  },
  {
    _id: 4,
    name: "Cocoa Krispies Treats",
    author: {
      id: 0,
      name: "Dana Riley"
    },
    difficulty: "Easy",
    time: "20 minutes",
    background: `We love cereal here. 
    
    Feel free to mix with Cocoa Pebbles!`,
    ingredients: [
      {
        id: 0,
        quantity: `1 lb.`,
        name:`Marshmellows`
      },
      {
        id: 1,
        quantity: `4 T.`,
        name:`Butter`
      },
      {
        id: 2,
        quantity: `1 box (17.5 oz.)`,
        name:`Cocoa Krispies Cereal`
      }
    ],
    steps: [
      {
        id: 0,
        step: `Line a 9 x 13 pan with buttered parchment paper.`
      },
      {
        id: 1,
        step: `In a large non-stick pot, melt butter and marshmallows over medium heat, stirring frequently.`
      },
      {
        id: 2,
        step: `Turn heat to lowest setting, and add entire box of cereal. Stir gently until evenly coated.`
      },
      {
        id: 3,
        step: `Turn into pan. Butter hands and press down evenly. Let cool.`
      },
      {
        id: 4,
        step: `Pull out of pan with parchment, and cut into squares.`
      }
    ],
    images: [
      {
        id: 0,
        picture: `https://i3.wp.com/www.foodlovinfamily.com/wp-content/uploads/2022/10/chocolate-rice-krispie-treats.jpg`,
        alt: `Yummy Cocoa Krispies treats!`
      }
    ]
  },
  {
    _id: 5,
    name: "Buttermilk Devil's Food Cake",
    author: {
      id: 0,
      name: "Dana Riley"
    },
    authorId: 0,
    difficulty: "Medium",
    time: "2 hours",
    background: "Classic!",
    ingredients: [
      {
        id: 0,
        quantity: `2 1/4 c (8 3/4 oz)`,
        name:`Cake Flour (or 2c. A.P. Flour)`
      },
      {
        id: 1,
        quantity: `3/3 c. (2 1/4 oz)`,
        name:`Natural Coca Powder (or Dutch — recommend Valrhona)`
      },
      {
        id: 2,
        quantity: `1 1/2 sticks (6 oz)`,
        name:`Butter, Room temperature`
      },
      {
        id: 3,
        quantity: `1 3/4 c. (12 1/2 oz)`,
        name:`Sugar`
      },
      {
        id: 4,
        quantity: `1/2 t.`,
        name:`Salt`
      },
      {
        id: 5,
        quantity: `2 t.`,
        name:`Vanilla (recommended: Nielsen Massey Mexican)`
      },
      {
        id: 6,
        quantity: `4`,
        name:`Eggs, Room temperature`
      },
      {
        id: 7,
        quantity: `2 1/2 t.`,
        name:`Baking Soda (For Dutch Cocoa, reduce soda to 1 t. and add1 1/2 t. baking powder)`
      },
      {
        id: 8,
        quantity: `1 3/4 c.`,
        name:`Buttermilk, Room temperature`
      }
    ],
    steps: [
      {
        id: 0,
        step: `Preheat oven to 350.`
      },
      {
        id: 1,
        step: `Grease and flour two 9” pans, three 8” pans, or a 9 x 13 cake pan. Or, line 24 muffin tins with cupcake liners.`
      },
      {
        id: 2,
        step: `Sift together flour and cocoa. Set aside.`
      },
      {
        id: 3,
        step: `In mixer, cream butter. Add sugar, salt and vanilla. Beat until pale and very fluffy, at least 5 minutes.Scrape sides and bottom of bowl.Add eggs one at a time, beating well after each. Scrape sides and bottom. Add baking soda, beat thoroughly.`
      },
      {
        id: 4,
        step: `Slowly blend 1/3 of flour mixture to creamed mixture, then 1/2 the buttermilk, 1/2 the remaining flour, all the remaining buttermilk, and finally all the remaining flour. Scrape sides and bottom of bowl completely after last addition. Beat on low speed 30-60 seconds.`
      },
      {
        id: 5,
        step: `Divide batter evenly between pans. Bake 30 to 40 minutes (18 to 20 for cupcakes) until 209 degrees, or a cake tester comes out clean and cake starts to pull away from sides of pan.`
      },
      {
        id: 6,
        step: `Cool 10 minutes, remove from pan and cool completely on cake rack.`
      },
    ],
    images: [
      {
        id: 0,
        picture: `https://richanddelish.com/wp-content/uploads/2022/04/best-one-bowl-chocolate-cake.jpg`,
        alt: `Chocolate Cake`
      }
    ]
  },




],
  users: [
    {
      id: 0,
      name: "Dana Riley",
      recipeIds: [0, 2, 4],
      username: "Danariley",
      favoriteRecipeIds: [1, 3]
    },
    {
      id: 1,
      name: "Adam Payne",
      recipeIds: [1],
      username: "MrSumada",
      favoriteRecipeIds: [0, 3]
    }
  ]
}

export default data;