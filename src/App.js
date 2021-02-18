import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './Components/AllPages/MainPage/MainPage';
import Signin from './Components/Sign/Sign-in/Signin';
import Signup from './Components/Sign/Sign-up/Signup';

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/sign-up" component={Signup} />
            <Route path="/main-page" component={MainPage} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
