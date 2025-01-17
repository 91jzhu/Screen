import React, {useEffect, useRef} from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Config} from './pages/config';
import {Button} from "antd";

function App() {
    const divRef = useRef(null)

    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/config">
                        <Config/>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
