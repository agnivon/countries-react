import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import ReactNavbar from '../components/Navbar';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ReactNavbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
