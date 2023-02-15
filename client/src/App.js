import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipe from './pages/Recipe';
import Upload from './pages/Upload';
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

// function App() {

//   return (
//     <div className="App">
//       <Header></Header>
//       <Recipe></Recipe>
//       <Footer></Footer>
//     </div>
//   );
// }

function App() {
  return (
    <ApolloProvider client={client}>
      <Router
      basename='/'
      >
        <div className='App'>
        <Header />
        <Routes>
          <Route exact path="/" element={<Recipe/>} />
          <Route exact path="/upload" element={<Upload/>} />
        </Routes>
        <Footer />
        </div>
        
      </Router>
    </ApolloProvider>
  );
}


export default App;
