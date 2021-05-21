import Login from "./screens/Login.screen";
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./screens/Dashboard.screen";
import Category from "./screens/Category.screen";

function App() {
    return (
        <div className="">
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/category">
                    <Category />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
