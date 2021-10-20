// import logo from './logo.svg';

import "./App.css";
import HomeContainer from "./Redux/Container/HomeContainer";
import HeaderContainer from "./Redux/Container/HeaderContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
