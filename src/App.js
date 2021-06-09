import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Home } from './components/Home';
import { Search } from './components/Search';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com"
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
