
import Header  from './components/header/Header';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Block from './pages/block/Block'
import Navbar from './components/navbar/Navbar';
import { Route ,Switch , Redirect} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      {/* <Navbar/> */}
      <Switch>
          <Route exact path="/home">
                <Home/>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/block">
            <Block/>
          </Route>
          <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
