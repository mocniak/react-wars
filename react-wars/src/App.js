import React, {Component} from 'react';
import PeoplePage from './pages/People';
import PeopleDetails from './pages/People/details';
import Page404 from './pages/Page404';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect
                        path="/"
                        to="/people"
                        exact
                    />
                    <Route
                        path="/people"
                        component={PeoplePage}
                        exact
                    />
                    <Route
                        path="/people/:id"
                        component={PeopleDetails}
                        exact
                    />
                    <Route
                        component={Page404}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
