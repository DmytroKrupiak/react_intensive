import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/items/:productId' exact component={ProductDetail} />
          <Route path='/about' exact component={About} />
          <Route path='/cart' exact component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
