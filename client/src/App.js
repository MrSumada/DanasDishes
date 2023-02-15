import './App.css';
import Name from './components/Name';
import Cards from './components/Cards'
import Bio from './components/Bio';
import Header from './components/Header';
import Footer from './components/Footer';
import piePicture from "./assets/images/IMG_1341.jpg"
import Recipe from './pages/Recipe';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Recipe></Recipe>
      <Footer></Footer>
    </div>
  );
}

export default App;
