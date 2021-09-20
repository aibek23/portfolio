import 'bootstrap/dist/css/bootstrap.min.css';
import Header  from './components/header/Header';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Block from './pages/block/Block'
import {HashRouter  , Route ,Switch ,Router} from 'react-router-dom';

function App() {
  return (
    <HashRouter >
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/block">
            <Block/>
          </Route>
          </Switch>
          </Router>
      </HashRouter >
  );
}

export default App;
