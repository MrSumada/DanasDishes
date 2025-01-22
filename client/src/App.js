import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Home from './pages/Home';
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

  // Reload last recipe on Page Load
  useEffect(() => {
    if (storedRecipe) {
      setRecipeNum(storedRecipe);
    }
  }, [])

  // Keep open on Amazon Silk Device
  useEffect(() => {
    const echoScript = document.createElement('script');
    echoScript.defer = true;
    echoScript.src = "https://dagammla.gitlab.io/keep-silk-open/keep.js";
    document.body.appendChild(echoScript);
    return () => {
      document.body.removeChild(echoScript);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes basename="/DanasDishes">
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/login" element={<Login />} />
          <Route  path="/*" element={<Home />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
