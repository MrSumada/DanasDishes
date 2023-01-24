import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Cards from './components/Cards'
import Bio from './components/Bio';
import Header from './components/Header';
import Footer from './components/Footer';
import piePicture from "./assets/images/IMG_1341.jpg"

function App() {

  let recipe = {
    id: 0,
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

  return (
    <div className="App">
      <Header></Header>
      <Name recipe={recipe}></Name>
      <Cards recipe={recipe}></Cards>
      <Bio></Bio>
      <Footer></Footer>
    </div>
  );
}

export default App;
