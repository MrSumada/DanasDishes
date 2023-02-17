import Name from '../components/Name';
import Cards from '../components/Cards'
import Bio from '../components/Bio';
import piePicture from "../assets/images/IMG_1341.jpg"

export default function Recipe() {

    let recipe = {
        _id: 0,
        name: "Deep-Dish Apple Pie",
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
      }
    
      recipe = {
        _id: 0,
        name: "Cap'n Crunch Cookies",
        difficulty: "Easy",
        time: "1 hours",
        background: "I update this all the time!",
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
      }

    return (
        <div>
            <Name recipe={recipe}></Name>
            <Cards recipe={recipe}></Cards>
            <Bio></Bio>
        </div>
    )
}