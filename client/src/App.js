import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipe from './pages/Recipe';
import Upload from './pages/Upload';
import Home from './pages/Home';
import recipes from './recipes';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'


const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  
  const [Tab, setTab ] = useState("Ingredients");
  const [Page, setPage] = useState("Home")
  const [RecipeNum, setRecipeNum] = useState(0)

  let storedRecipe = localStorage.getItem(`Recipe`) || 0; 

  useEffect(() => {
    if (storedRecipe) {
      setRecipeNum(storedRecipe);
    }
}, [])

  // let recipe = recipes[RecipeNum]

  return (
    <ApolloProvider client={client}>
      <Router>
      <Routes basename="/DanasDishes">
          <Route exact path="/upload" element={<Upload />} />
          <Route  path="/*" element={<Home />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );

  // return (
  //   <div className={`App ${Page === "Home" ? "recipe" : ""}`}>
  //     <Header 
  //       recipes={recipes} 
  //       RecipeNum={RecipeNum}  
  //       setRecipeNum={setRecipeNum} 
  //       Page={Page} 
  //       setPage={setPage}
  //       Tab={Tab}
  //       setTab={setTab}
  //     />
  //     {Page === "Upload" ? (<Upload />) : ("")}
  //     {Page === "Home" ? (<Recipe 
  //       recipe={recipe}
  //       Tab={Tab}
  //       setTab={setTab}
  //     />) : ("")}
  //     {Page === "Upload" ? (<Footer page={"upload"}/>) : (<Footer page={"default"}/>)}
  //   </div>
  // );
}


export default App;
