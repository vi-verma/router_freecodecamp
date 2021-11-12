import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Viewprofile from './Viewprofile';
import Editprofile from './Editprofile';

function Profile(props) {
    // used for nested url path
    const {path, url} = useRouteMatch();

    return (
        <>
        <h1>
            Profile Page
        </h1>
        <div className='profile'>
           <ul>
               <li>
                   <Link to={`${url}/viewprofile`}>View Profile</Link>
               </li>
               <li>
                   <Link to={`${url}/editprofile`}>Eeit Profile</Link>
               </li>
           </ul>
        </div>
        <Switch>
            <Route path={`${path}/viewprofile`}>
                <Viewprofile/>
            </Route>
            <Route path={`${path}/editprofile`}>
                <Editprofile/>
            </Route>
        </Switch>
        </>
    );
}

export default Profile;