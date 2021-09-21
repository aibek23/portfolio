
import Header  from './components/header/Header';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Block from './pages/block/Block'
import { Route ,Switch , Redirect} from 'react-router-dom';

function App() {
  return (
    <>
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
          <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
