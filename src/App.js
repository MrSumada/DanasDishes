import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Cards from './components/Cards'
import Bio from './components/Bio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Name></Name>
      <Cards></Cards>
      <Bio></Bio>
      <Footer></Footer>
    </div>
  );
}

export default App;
