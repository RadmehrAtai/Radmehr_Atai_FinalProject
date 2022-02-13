import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout";
import routes from "./config/Router"

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} exact={route.exact} path={route.path}>
                        <Layout>{route.component}</Layout>
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
