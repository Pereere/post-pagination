import React from 'react';
// @ts-ignore
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PersonList from "./Components/PersonList";
import PersonInput from "./Components/PersonInput";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Blogs from "./Components/Blogs";
import NotFound from "./Components/NotFound";

import Blog from "./Components/Blog";
import Dashboard from "./Components/Dashboard";
import AllPosts from "./Components/AllPosts";

function App() {
    return (
        <div className="App">

            <AllPosts />
            {/*<PersonList />*/}
            {/*<PersonInput />*/}

            {/*<BrowserRouter>
                <h2 style={{background: 'cornflowerblue'}}> navbar </h2>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/blogs" component={Blogs} />
                    <Route exact path="/blogs/:id" component={Blog} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>*/}
        </div>
    );
}

export default App;
