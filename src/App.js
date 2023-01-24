import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Cards from './components/Cards'
import Bio from './components/Bio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  let recipe = {
    story: "Merry Christmas, Mommy!  🎄",
    ingredients: [
      {
        quantity: `2 to 2 ½ c.`,
        name:`sugar (depending on tartness of apples)`
      },
      {
        quantity: `1 ½ t.`,
        name:`Saigon cinnamon (or 2 t. less strong cinnamon)`
      },
      {
        quantity: `¾ to 1 t.`,
        name:`1/3 of a nutmeg, grated—about ¾ to 1 t`
      },
      {
        quantity: `2 T.`,
        name:`flour`
      },
      {
        quantity: `2 T.`,
        name:`tapioca flour`
      },
      {
        quantity: `3/4 t.`,
        name:`salt`
      },
      {
        quantity: `12 to 14 c.`,
        name:`peeled, sliced green apples—Pippin or Granny Smith. Ripe apples will be less “apple” green and more yellow-green. They should also have a blush on one side.`
      },
      {
        quantity: `2 T.`,
        name:`butter`
      },
      {
        quantity: `2 T.`,
        name:`Crust for Deep-Dish 2-Crust pie (see recipe)`
      }
    ]
  }

  return (
    <div className="App">
      <Header></Header>
      <Name></Name>
      <Cards recipe={recipe}></Cards>
      <Bio></Bio>
      <Footer></Footer>
    </div>
  );
}

export default App;
