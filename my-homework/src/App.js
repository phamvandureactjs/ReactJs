import logo from './logo.svg';
import './App.css';

function App() {

  var isUserLoggedln = true;
  if(isUserLoggedln === true){
    return(
      <h1>Hello User</h1>
    );
  }
  else{
    return(
      <h1>
        Login Now
      </h1>
    );
  }
}

export default App;
