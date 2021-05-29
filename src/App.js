import Login from "./screens/Login.screen";
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./screens/Dashboard.screen";
import Category from "./screens/Category.screen";
import CategoryCreate from "./screens/CategoryCreate.screen";
import CategoryEdit from "./screens/CategoryEdit.screen";

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
                <Route exact path="/category">
                    <Category />
                </Route>
                <Route path="/category/create">
                    <CategoryCreate />
                </Route>
                <Route exact path="/category/:id/edit">
                    <CategoryEdit />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
