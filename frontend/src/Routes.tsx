import { BrowserRouter, Route} from "react-router-dom"
import Home from 'pages/Home'
import Dashborad from "pages/Dashboard";
import { Switch } from "react-router-dom";

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/dashboard">
                <Dashborad />
            </Route>
        
        </Switch>

      </BrowserRouter>
    );
}
  
export default Routes;