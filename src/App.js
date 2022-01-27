import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import About from './About.js';
import Users from './Users.js';
import UserId from './UserId.js';
import Error from './Error.js';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/'  element={<Main/>} />
          <Route path='/about'  element={<About/>} />
          <Route path='/users'  element={<Users/>} />
          <Route path='/users'  element={<UserId/>} />
          <Route path='*'  element={<Error/>} />
        </Routes>
      </BrowserRouter>
      <Comp1/>
      <Comp2/>
    </>
  );
}

export default App;
