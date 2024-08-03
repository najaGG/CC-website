import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Home from './Home';
import { Switch , Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/1">
            <Page1/>
          </Route>
          <Route path="/2">
            <Page2/> 
          </Route>
          <Route path="/3">
            <Page3/> 
          </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
