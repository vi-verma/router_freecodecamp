import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import About from './About';
import Profile from './Profile';
import Home from './Home';
import NoContent from './NoContent';
import './App.css';
import Post from './Post';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);

  const handeler = () =>{
    setLogin(!login)
  }
  console.log(login)
  return (
    // if we add basename it will be added before the paths of components
    // <BrowserRouter basename="/somePathName">

    // force refresh will refresh page every time when we click 
    // <BrowserRouter forceRefresh>

    // <BrowserRouter getUserConfirmation={("confirm to change ", callback) => {
    //   callback(window.confirm)
    // }}>
<>
    <BrowserRouter>
    <div className="App">
    <Header/>
    <button type='button' onClick={handeler}>{!login ? "Login" : "Logout" }</button>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About}/>
      <Route path='/profile' >
        {login ? <Profile/> : <Redirect to='/'/>}
      </Route>
      <Route path='/post/:id' component={Post}/>
      <Route component={NoContent}/>
      {/* <Route path='/' component={}/> */}
    </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
