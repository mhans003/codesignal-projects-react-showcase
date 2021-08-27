import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Solutions from './pages/Solutions';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/solutions" component={Solutions}/>
      </Switch>
    </Router>
  );
}

export default App;
